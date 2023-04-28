import { z } from "zod";
export declare const envSchema: z.ZodObject<{
    partnerId: z.ZodOptional<z.ZodNumber>;
    partnerKey: z.ZodOptional<z.ZodString>;
    baseURL: z.ZodOptional<z.ZodString>;
    accessToken: z.ZodOptional<z.ZodString>;
    shopId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    partnerId?: number | undefined;
    partnerKey?: string | undefined;
    baseURL?: string | undefined;
    accessToken?: string | undefined;
    shopId?: number | undefined;
}, {
    partnerId?: number | undefined;
    partnerKey?: string | undefined;
    baseURL?: string | undefined;
    accessToken?: string | undefined;
    shopId?: number | undefined;
}>;
export type EnvSchema = z.infer<typeof envSchema>;
export declare const env: {
    partnerId?: number | undefined;
    partnerKey?: string | undefined;
    baseURL?: string | undefined;
    accessToken?: string | undefined;
    shopId?: number | undefined;
};
