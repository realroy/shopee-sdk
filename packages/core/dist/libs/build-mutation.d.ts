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
export declare function buildMutation<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape>({ responseType, ...args }: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>): (requestParameters: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, (z.baseObjectOutputType<TRequestParameterSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; } : never)[keyof TRequestParameterSchema]> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, (z.baseObjectOutputType<TRequestParameterSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; } : never)[keyof TRequestParameterSchema]>[k]; } : never) => Promise<z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_3 extends object ? { [k_3 in keyof T_3]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_3] ? never : k_3; } : never)[keyof TResponseSchema]> extends infer T_2 ? { [k_2 in keyof T_2]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TResponseSchema>, (z.baseObjectOutputType<TResponseSchema> extends infer T_3 extends object ? { [k_3 in keyof T_3]: undefined extends z.baseObjectOutputType<TResponseSchema>[k_3] ? never : k_3; } : never)[keyof TResponseSchema]>[k_2]; } : never>;
//# sourceMappingURL=build-mutation.d.ts.map