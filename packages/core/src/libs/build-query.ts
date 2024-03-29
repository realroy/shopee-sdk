import { z } from "zod";
import _snakeCase from "lodash.snakecase";
import _camelCase from "lodash.camelcase";

import { HttpClient } from "./http-client.js";
import { ShopeeContext } from "./shopee-context.js";

import { signURL, transformObjectKeys } from "../utils/index.js";

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
};

function createTransform<
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
  return async function transformParsedRequestParameters(
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
  };
}

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
  const transformParsedRequestParameters = createTransform(args);
  type TRequestParameters = z.infer<typeof args.requestParameterSchema>;

  return async function query(requestParameters: TRequestParameters) {
    const parseRequestParameters =
      await args.requestParameterSchema.safeParseAsync(requestParameters);

    if (!parseRequestParameters.success) {
      throw new Error(
        `parse request parameters error: ${parseRequestParameters.error.message}`
      );
    }

    const transformRequestParametersData =
      await transformParsedRequestParameters(parseRequestParameters.data);

    const parsedRequestParameters = transformObjectKeys(
      transformRequestParametersData,
      (key) => _snakeCase(key.toString())
    );

    const contextInstance = ShopeeContext.getInstance();
    const context = contextInstance.value;

    httpClient.setLogEnabled(contextInstance.isLogEnabled);

    const signedURL = await signURL({
      ...context,
      path: args.path,
      params: parsedRequestParameters,
    });

    const response = await httpClient.get(signedURL);
    const data = transformObjectKeys(response.data, (key) =>
      _camelCase(key.toString())
    );

    const parseData = await args.responseSchema.safeParseAsync(data);

    if (!parseData.success) {
      throw new Error(`parse response error: ${parseData.error.message}`);
    }

    const parsedData = parseData.data;

    return parsedData;
  };
}
