import { z } from "zod";
import _snakeCase from "lodash/snakeCase";
import _camelCase from "lodash/camelCase";

import { HttpClient } from "./http-client";
import { ShopeeContext } from "./shopee-context";

import { signURL, transformObjectKeys } from "../utils";
import type { ResponseType } from "axios";

const httpClient = HttpClient.getInstance();

export type BuildMutationArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
> = {
  path: string;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  responseSchema?: z.ZodObject<TResponseSchema> | z.ZodAny;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => typeof data;
  responseType?: ResponseType;
};

export function buildMutation<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
>({
  responseType = "json",
  ...args
}: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>) {
  type TRequestParameters = z.infer<typeof args.requestParameterSchema>;

  function transformRequestParameter(
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) {
    if (!args.transformRequestParameter) {
      return data;
    }

    return args.transformRequestParameter(data);
  }

  return async function mutation(requestParameters: TRequestParameters) {
    const transformedRequestParameter =
      transformRequestParameter(requestParameters);

    const parseRequestParameters =
      await args.requestParameterSchema.safeParseAsync(
        transformedRequestParameter
      );

    if (!parseRequestParameters.success) {
      throw new Error(
        `parse request parameters error: ${parseRequestParameters.error.message}`
      );
    }

    const contextInstance = ShopeeContext.getInstance();
    const context = contextInstance.value;

    httpClient.setLogEnabled(contextInstance.isLogEnabled);

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: {},
    });

    const body = transformObjectKeys(parseRequestParameters.data, (key) =>
      _snakeCase(key.toString())
    );

    const response = await httpClient.post(signedURL, {}, body, responseType);

    if (responseType !== "json" || args.responseSchema === undefined) {
      return response.data;
    }

    const data = transformObjectKeys(response.data, (key) =>
      _camelCase(key.toString())
    );

    const parseData = await (
      args.responseSchema as z.ZodObject<TResponseSchema>
    ).safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(`parse response error: ${parseData.error.message}`);
    }

    return parseData.data;
  };
}
