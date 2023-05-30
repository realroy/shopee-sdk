import { z } from "zod";

import { HttpClient } from "./http-client";
import { ShopeeContext } from "./shopee-context";

import { signURL } from "../utils";

const httpClient = HttpClient.getInstance();

export type BuildMutationArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
> = {
  path: string;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  responseSchema: z.ZodObject<TResponseSchema>;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => typeof data;
};

export function buildMutation<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
>(args: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>) {
  return async function mutation(
    requestParameters: z.infer<typeof args.requestParameterSchema>
  ) {
    const transformRequestParameter =
      args.transformRequestParameter ?? ((data) => data);

    const parseRequestParameters = await args.requestParameterSchema
      .transform(transformRequestParameter)
      .safeParseAsync(requestParameters);

    if (!parseRequestParameters.success) {
      throw new Error(
        `parse request parameters error: ${parseRequestParameters.error.message}`
      );
    }

    const contextInstance = ShopeeContext.getInstance()
    const context = contextInstance.value;

    httpClient.setLogEnabled(contextInstance.isLogEnabled)

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: {},
    });

    const body = parseRequestParameters.data;

    const { data } = await httpClient.post(signedURL, {}, body);

    const parseData = await args.responseSchema.safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(`parse response error: ${parseData.error.message}`);
    }

    return parseData.data;
  };
}
