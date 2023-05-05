import { z } from "zod";

import { HttpClient } from "./http-client";
import { ShopeeContext } from "./shopee-context";

import { signURL } from "@/utils";

const httpClient = HttpClient.getInstance();

export type BuildApiGetArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
> = {
  method: "GET";
  path: string;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  responseSchema: z.ZodObject<TResponseSchema>;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => typeof data;
};

export type BuildApiPostArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape,
  TRequestBodySchema extends z.ZodRawShape
> = {
  method: "POST";
  path: string;
  body: object;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  requestBodySchema: z.ZodObject<TRequestBodySchema>;
  responseSchema: z.ZodObject<TResponseSchema>;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => typeof data;
};

export function buildApi<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape,
  TRequestBodySchema extends z.ZodRawShape
>(
  args:
    | BuildApiGetArgs<TRequestParameterSchema, TResponseSchema>
    | BuildApiPostArgs<
        TRequestParameterSchema,
        TResponseSchema,
        TRequestBodySchema
      >
) {
  return async function apiFunction(
    requestParameters: z.infer<typeof args.requestParameterSchema>
  ) {
    const transformRequestParameter =
      args.transformRequestParameter ?? ((data) => data);

    const parseRequestParameters = await args.requestParameterSchema
      .transform(transformRequestParameter)
      .safeParseAsync(requestParameters);
  
    if (!parseRequestParameters.success) {
      throw new Error(parseRequestParameters.error.message);
    }

    const parsedRequestParameters = parseRequestParameters.data;
    const context = ShopeeContext.getInstance().value;

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: parsedRequestParameters,
    });

    let data: unknown;

    if (args.method === "POST") {
      const parseRequestBodySchema =
        await args.requestBodySchema.safeParseAsync(args.body);
      if (!parseRequestBodySchema.success) {
        throw new Error(parseRequestBodySchema.error.message);
      }

      data = (await httpClient.post(signedURL, {}, args.body)).data;
    } else {
      data = (await httpClient.get(signedURL)).data;
    }

    const parseData = await args.responseSchema.safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(parseData.error.message);
    }

    return parseData.data;
  };
}
