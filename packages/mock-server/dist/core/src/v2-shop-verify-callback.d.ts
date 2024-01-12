import { z } from "zod";
export declare const callbackRequestQuerySchema: z.ZodObject<{
    code: z.ZodString;
    shop_id: z.ZodString;
    sign: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    sign: string;
    shop_id: string;
}, {
    code: string;
    sign: string;
    shop_id: string;
}>;
export declare function verifyCallback(requestQuery: unknown): Promise<{
    code: string;
    shopId: string;
    sign: string;
}>;
//# sourceMappingURL=v2-shop-verify-callback.d.ts.map