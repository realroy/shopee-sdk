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
    accessToken: z.ZodString;
    error: z.ZodString;
    expireIn: z.ZodNumber;
    message: z.ZodString;
    refreshToken: z.ZodString;
    requestId: z.ZodString;
    merchantIdList: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    shopIdList: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    message: string;
    error: string;
    requestId: string;
    expireIn: number;
    refreshToken: string;
    merchantIdList?: number[] | undefined;
    shopIdList?: number[] | undefined;
}, {
    accessToken: string;
    message: string;
    error: string;
    requestId: string;
    expireIn: number;
    refreshToken: string;
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
    error: string;
    requestId: string;
    expireIn: number;
    refreshToken: string;
    merchantIdList?: number[] | undefined;
    shopIdList?: number[] | undefined;
}>;
//# sourceMappingURL=v2-public-get-access-token.d.ts.map