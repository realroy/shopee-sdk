import { z } from "zod";
export type BuildMutationArgs<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape> = {
    path: string;
    requestParameterSchema: z.ZodObject<TRequestParameterSchema>;
    responseSchema?: z.ZodObject<TResponseSchema> | z.ZodAny;
    transformRequestParameter?: (data: z.infer<z.ZodObject<TRequestParameterSchema>>) => typeof data;
};
export declare function buildMutation<TRequestParameterSchema extends z.ZodRawShape, TResponseSchema extends z.ZodRawShape>(args: BuildMutationArgs<TRequestParameterSchema, TResponseSchema>): (requestParameters: z.infer<typeof args.requestParameterSchema>) => Promise<any>;
//# sourceMappingURL=build-mutation.d.ts.map