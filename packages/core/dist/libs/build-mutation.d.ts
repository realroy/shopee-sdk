import { z } from "zod";
import type { ResponseType } from "axios";
export type BuildMutationArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape> = {
    path: string;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    responseSchema?: z.ZodObject<TResponseSchema> | z.ZodAny;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => typeof data;
    responseType?: ResponseType;
};
export declare function buildMutation<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape>(args: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>): (requestParameters: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, (z.baseObjectOutputType<TRequestParameterSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; } : never)[keyof TRequestParameterSchema]> extends infer T ? { [k in keyof T]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<TRequestParameterSchema>, (z.baseObjectOutputType<TRequestParameterSchema> extends infer T_1 extends object ? { [k_1 in keyof T_1]: undefined extends z.baseObjectOutputType<TRequestParameterSchema>[k_1] ? never : k_1; } : never)[keyof TRequestParameterSchema]>[k]; } : never) => Promise<any>;
//# sourceMappingURL=build-mutation.d.ts.map