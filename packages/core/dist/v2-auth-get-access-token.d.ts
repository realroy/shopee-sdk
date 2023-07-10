import { z } from "zod";
export declare const getAccessTokenRequestParametersSchema: z.ZodObject<{
    code: z.ZodString;
    partnerId: z.ZodOptional<z.ZodNumber>;
    shopId: z.ZodOptional<z.ZodNumber>;
    mainAccountId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    code: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    mainAccountId?: number | undefined;
}, {
    code: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    mainAccountId?: number | undefined;
}>;
export declare const getAccessTokenResponseSchema: z.ZodObject<{
    refreshToken: z.ZodString;
    accessToken: z.ZodString;
    expireIn: z.ZodNumber;
    requestId: z.ZodString;
    error: z.ZodString;
    message: z.ZodString;
    merchantIdList: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    shopIdList: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantIdList?: number[] | undefined;
    shopIdList?: number[] | undefined;
}, {
    accessToken: string;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantIdList?: number[] | undefined;
    shopIdList?: number[] | undefined;
}>;
export declare const getAccessToken: (requestParameters: {
    code: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    mainAccountId?: number | undefined;
}) => Promise<{
    accessToken: string;
    message: string;
    refreshToken: string;
    expireIn: number;
    requestId: string;
    error: string;
    merchantIdList?: number[] | undefined;
    shopIdList?: number[] | undefined;
}>;
//# sourceMappingURL=v2-auth-get-access-token.d.ts.map