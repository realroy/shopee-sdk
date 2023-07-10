import { z } from "zod";
export declare const refreshAccessTokenRequestParametersSchema: z.ZodObject<{
    code: z.ZodString;
    partnerId: z.ZodOptional<z.ZodNumber>;
    shopId: z.ZodOptional<z.ZodNumber>;
    merchantId: z.ZodOptional<z.ZodNumber>;
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    refreshToken: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    merchantId?: number | undefined;
}, {
    code: string;
    refreshToken: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    merchantId?: number | undefined;
}>;
export declare const refreshAccessTokenResponseSchema: z.ZodObject<{
    partnerId: z.ZodNumber;
    refreshToken: z.ZodString;
    accessToken: z.ZodString;
    expireIn: z.ZodNumber;
    requestId: z.ZodString;
    error: z.ZodString;
    message: z.ZodString;
    shopId: z.ZodNumber;
    merchantId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    partnerId: number;
    accessToken: string;
    shopId: number;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantId: number;
}, {
    partnerId: number;
    accessToken: string;
    shopId: number;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantId: number;
}>;
export declare const refreshAccessToken: (requestParameters: {
    code: string;
    refreshToken: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    merchantId?: number | undefined;
}) => Promise<{
    partnerId: number;
    accessToken: string;
    shopId: number;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantId: number;
}>;
//# sourceMappingURL=v2-auth-refresh-access-token.d.ts.map