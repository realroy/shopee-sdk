import { z } from "zod";
export declare const refreshAccessTokenRequestParametersSchema: z.ZodObject<{
    refreshToken: z.ZodString;
    partnerId: z.ZodOptional<z.ZodNumber>;
    shopId: z.ZodOptional<z.ZodNumber>;
    merchantId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    refreshToken: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    merchantId?: number | undefined;
}, {
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
    merchantId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    partnerId: number;
    accessToken: string;
    shopId: number;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantId?: number | undefined;
}, {
    partnerId: number;
    accessToken: string;
    shopId: number;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantId?: number | undefined;
}>;
export declare const refreshAccessToken: (requestParameters: {
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
    merchantId?: number | undefined;
}>;
//# sourceMappingURL=v2-auth-refresh-access-token.d.ts.map