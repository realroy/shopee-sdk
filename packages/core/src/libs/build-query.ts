import { z } from "zod";
import _snakeCase from "lodash/snakeCase";
import _camelCase from "lodash/camelCase";

import { HttpClient } from "./http-client";
import { ShopeeContext } from "./shopee-context";

import { signURL, transformObjectKeys } from "../utils";

const httpClient = HttpClient.getInstance();

export type BuildQueryArgs<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape,
  TTransformedRequestParameterSchema extends z.ZodRawShape
> = {
  path: string;
  requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
  responseSchema: z.ZodObject<TResponseSchema>;
  transformRequestParameterSchema?: z.ZodObject<TTransformedRequestParameterSchema>;
  transformRequestParameter?: (
    data: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) => z.infer<z.ZodObject<TTransformedRequestParameterSchema>>;
  toCamelCase?: boolean;
};

export function buildQuery<
  TRequestParameterSchema extends z.ZodRawShape,
  TResponseSchema extends z.ZodRawShape,
  TTransformedRequestParameterSchema extends z.ZodRawShape
>(
  args: BuildQueryArgs<
    TRequestParameterSchema,
    TResponseSchema,
    TTransformedRequestParameterSchema
  >
) {
  async function transformParsedRequestParameters(
    parsedRequestParameterData: z.infer<z.ZodObject<TRequestParameterSchema>>
  ) {
    if (!args.transformRequestParameter) {
      return parsedRequestParameterData;
    }

    const data = args.transformRequestParameter(parsedRequestParameterData);

    if (!args.transformRequestParameterSchema) {
      return parsedRequestParameterData;
    }

    const result = await args.transformRequestParameterSchema.safeParseAsync(
      data
    );

    if (!result.success) {
      throw new Error(
        `transform request parameters error: ${result.error.message}`
      );
    }

    return result.data;
  }

  return async function query(
    requestParameters: z.infer<typeof args.requestParameterSchema>
  ) {
    const parseRequestParameters =
      await args.requestParameterSchema.safeParseAsync(requestParameters);

    if (!parseRequestParameters.success) {
      throw new Error(
        `parse request parameters error: ${parseRequestParameters.error.message}`
      );
    }

    const transformRequestParametersData =
      await transformParsedRequestParameters(parseRequestParameters.data);

    const parsedRequestParameters = args.toCamelCase
      ? transformObjectKeys(transformRequestParametersData, (key) =>
          _snakeCase(key.toString())
        )
      : transformRequestParametersData;

    const contextInstance = ShopeeContext.getInstance();
    const context = contextInstance.value;

    httpClient.setLogEnabled(contextInstance.isLogEnabled);

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: parsedRequestParameters,
    });

    const response = await httpClient.get(signedURL);
    const data = args.toCamelCase
      ? transformObjectKeys(response.data, (key) => _camelCase(key.toString()))
      : response.data;

    const parseData = await args.responseSchema.safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(`parse response error: ${parseData.error.message}`);
    }

    const parsedData = parseData.data;

    return parsedData;
  };
}
