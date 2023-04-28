import { z } from "zod";
export type BuildApiGetArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape> = {
    method: "GET";
    path: string;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    responseSchema: z.ZodObject<TResponseSchema>;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => typeof data;
};
export type BuildApiPostArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape, TRequestBodySchema extends z.ZodRawShape> = {
    method: "POST";
    path: string;
    body: object;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    requestBodySchema: z.ZodObject<TRequestBodySchema>;
    responseSchema: z.ZodObject<TResponseSchema>;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => typeof data;
};
export declare function buildApi<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape, TRequestBodySchema extends z.ZodRawShape>(args: BuildApiGetArgs<TRequestParameterSchema, TResponseSchema> | BuildApiPostArgs<TRequestParameterSchema, TResponseSchema, TRequestBodySchema>): (requestParameters: z.infer<typeof args.requestParameterSchema>) => Promise<z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_1] ? never : k_1; } : never)[keyof TResponseSchema]> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_1] ? never : k_1; } : never)[keyof TResponseSchema]>[k]; } : never>;
