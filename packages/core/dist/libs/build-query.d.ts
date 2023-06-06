import { z } from "zod";
export type BuildQueryArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape, TTransformedRequestParameterSchema extends z.ZodRawShape> = {
    path: string;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    responseSchema: z.ZodObject<TResponseSchema>;
    transformRequestParameterSchema?: z.ZodObject<TTransformedRequestParameterSchema>;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => z.infer<z.ZodObject<TTransformedRequestParameterSchema>>;
    toCamelCase?: boolean;
};
export declare function buildQuery<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape, TTransformedRequestParameterSchema extends z.ZodRawShape>(args: BuildQueryArgs<TRequestParameterSchema, TResponseSchema, TTransformedRequestParameterSchema>): (requestParameters: z.infer<typeof args.requestParameterSchema>) => Promise<z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_1] ? never : k_1; } : never)[keyof TResponseSchema]> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_1] ? never : k_1; } : never)[keyof TResponseSchema]>[k]; } : never>;
//# sourceMappingURL=build-query.d.ts.map