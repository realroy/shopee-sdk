import { z } from "zod";
import _snakeCase from 'lodash/snakeCase'
import _camelCase from 'lodash/camelCase'

import { HttpClient } from "./http-client";
import { ShopeeContext } from "./shopee-context";

import { signURL, transformObjectKeys } from "../utils";

const httpClient = HttpClient.getInstance();

export type BuildQueryArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
> = {
  path: string;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  responseSchema: z.ZodObject<TResponseSchema>;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => typeof data;
  toCamelCase?: boolean
};

export function buildQuery<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape
>(args: BuildQueryArgs<TRequestParameterSchema, TResponseSchema>) {
  return async function query(
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

    const parsedRequestParameters = args.toCamelCase ? transformObjectKeys(parseRequestParameters.data, (key) => _snakeCase(key.toString())) : parseRequestParameters.data;
    const contextInstance = ShopeeContext.getInstance()
    const context = contextInstance.value;

    httpClient.setLogEnabled(contextInstance.isLogEnabled)

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: parsedRequestParameters,
    });

    const response = await httpClient.get(signedURL);
    const data = args.toCamelCase ? transformObjectKeys(response.data, key => _camelCase(key.toString())) : response.data;

    const parseData = await args.responseSchema.safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(`parse response error: ${parseData.error.message}`);
    }

    const parsedData = parseData.data;

    return parsedData
  };
}

