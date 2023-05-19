import { z } from "zod";
export declare const getAccessTokenRequestParametersSchema: z.ZodObject<{
    code: z.ZodString;
    partner_id: z.ZodOptional<z.ZodNumber>;
    shop_id: z.ZodOptional<z.ZodNumber>;
    main_account_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    code: string;
    partner_id?: number | undefined;
    shop_id?: number | undefined;
    main_account_id?: number | undefined;
}, {
    code: string;
    partner_id?: number | undefined;
    shop_id?: number | undefined;
    main_account_id?: number | undefined;
}>;
export declare const getAccessTokenResponseSchema: z.ZodObject<{
    access_token: z.ZodString;
    error: z.ZodString;
    expires_in: z.ZodNumber;
    message: z.ZodString;
    refresh_token: z.ZodString;
    request_id: z.ZodString;
    shop_id_list: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    access_token: string;
    error: string;
    request_id: string;
    expires_in: number;
    refresh_token: string;
    shop_id_list: number[];
}, {
    message: string;
    access_token: string;
    error: string;
    request_id: string;
    expires_in: number;
    refresh_token: string;
    shop_id_list: number[];
}>;
export declare const getAccessToken: (requestParameters: {
    code: string;
    partner_id?: number | undefined;
    shop_id?: number | undefined;
    main_account_id?: number | undefined;
}) => Promise<{
    message: string;
    access_token: string;
    error: string;
    request_id: string;
    expires_in: number;
    refresh_token: string;
    shop_id_list: number[];
}>;
//# sourceMappingURL=v2-public-get-access-token.d.ts.map