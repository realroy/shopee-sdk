import { z } from "zod";
import type { ResponseType } from "axios";
export type BuildMutationArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape> = {
    path: string;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    responseSchema?: z.ZodObject<TResponseSchema> | z.ZodAny;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => typeof data;
    responseType?: ResponseType;
    headers?: Record<string, string | number>;
};
export declare function buildMutation<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape>({ responseType, ...args }: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>): (requestParameters: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, { [k_1 in keyof z.baseObjectOutputType<TRequestParameterSchema>]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; }[keyof TRequestParameterSchema]> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, { [k_1 in keyof z.baseObjectOutputType<TRequestParameterSchema>]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; }[keyof TRequestParameterSchema]>[k]; } : never) => Promise<z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, { [k_3 in keyof z.baseObjectOutputType<TResponseSchema>]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_3] ? never : k_3; }[keyof TResponseSchema]> extends infer T_1 ? { [k_2 in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, { [k_3 in keyof z.baseObjectOutputType<TResponseSchema>]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_3] ? never : k_3; }[keyof TResponseSchema]>[k_2]; } : never>;
//# sourceMappingURL=build-mutation.d.ts.map