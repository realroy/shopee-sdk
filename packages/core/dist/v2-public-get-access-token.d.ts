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
    access_token: z.ZodString;
    error: z.ZodString;
    expires_in: z.ZodNumber;
    message: z.ZodString;
    refreshToken: z.ZodString;
    requestId: z.ZodString;
    shopIdList: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    access_token: string;
    error: string;
    requestId: string;
    expires_in: number;
    refreshToken: string;
    shopIdList: number[];
}, {
    message: string;
    access_token: string;
    error: string;
    requestId: string;
    expires_in: number;
    refreshToken: string;
    shopIdList: number[];
}>;
export declare const getAccessToken: (requestParameters: {
    code: string;
    partnerId?: number | undefined;
    shopId?: number | undefined;
    mainAccountId?: number | undefined;
}) => Promise<any>;
//# sourceMappingURL=v2-public-get-access-token.d.ts.map