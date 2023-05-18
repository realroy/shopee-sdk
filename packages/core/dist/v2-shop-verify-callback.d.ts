import { z } from "zod";
export declare const callbackRequestQuerySchema: z.ZodObject<{
    code: z.ZodString;
    shopId: z.ZodString;
    sign: z.ZodString;
}, "strip", z.ZodTypeAny, {
    shopId: string;
    code: string;
    sign: string;
}, {
    shopId: string;
    code: string;
    sign: string;
}>;
export declare function verifyCallback(requestQuery: unknown): Promise<{
    code: string;
    shopId: string;
    sign: string;
}>;
//# sourceMappingURL=v2-shop-verify-callback.d.ts.map