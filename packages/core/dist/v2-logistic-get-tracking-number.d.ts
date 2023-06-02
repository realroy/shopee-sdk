import { z } from "zod";
export declare const logisticGetTrackingNumberRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodNumber>;
    responseOptionalFields: z.ZodOptional<z.ZodEnum<["first_mile_tracking_number", "last_mile_tracking_number", "plp_number", "first_mile_tracking_number,last_mile_tracking_number", "first_mile_tracking_number,plp_number", "last_mile_tracking_number,first_mile_tracking_number", "last_mile_tracking_number,plp_number", "plp_number,first_mile_tracking_number", "plp_number,last_mile_tracking_number", "first_mile_tracking_number,last_mile_tracking_number,plp_number", "first_mile_tracking_number,plp_number,last_mile_tracking_number", "last_mile_tracking_number,first_mile_tracking_number,plp_number", "last_mile_tracking_number,plp_number,first_mile_tracking_number", "plp_number,first_mile_tracking_number,last_mile_tracking_number", "plp_number,last_mile_tracking_number,first_mile_tracking_number"]>>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: "plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number" | "first_mile_tracking_number,plp_number" | "last_mile_tracking_number,first_mile_tracking_number" | "last_mile_tracking_number,plp_number" | "plp_number,first_mile_tracking_number" | "plp_number,last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number,plp_number" | "first_mile_tracking_number,plp_number,last_mile_tracking_number" | "last_mile_tracking_number,first_mile_tracking_number,plp_number" | "last_mile_tracking_number,plp_number,first_mile_tracking_number" | "plp_number,first_mile_tracking_number,last_mile_tracking_number" | "plp_number,last_mile_tracking_number,first_mile_tracking_number" | undefined;
}, {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: "plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number" | "first_mile_tracking_number,plp_number" | "last_mile_tracking_number,first_mile_tracking_number" | "last_mile_tracking_number,plp_number" | "plp_number,first_mile_tracking_number" | "plp_number,last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number,plp_number" | "first_mile_tracking_number,plp_number,last_mile_tracking_number" | "last_mile_tracking_number,first_mile_tracking_number,plp_number" | "last_mile_tracking_number,plp_number,first_mile_tracking_number" | "plp_number,first_mile_tracking_number,last_mile_tracking_number" | "plp_number,last_mile_tracking_number,first_mile_tracking_number" | undefined;
}>;
export declare const logisticGetTrackingNumberResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {} | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {} | undefined;
}>;
export declare const getTrackingNumber: (requestParameters: {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: "plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number" | "first_mile_tracking_number,plp_number" | "last_mile_tracking_number,first_mile_tracking_number" | "last_mile_tracking_number,plp_number" | "plp_number,first_mile_tracking_number" | "plp_number,last_mile_tracking_number" | "first_mile_tracking_number,last_mile_tracking_number,plp_number" | "first_mile_tracking_number,plp_number,last_mile_tracking_number" | "last_mile_tracking_number,first_mile_tracking_number,plp_number" | "last_mile_tracking_number,plp_number,first_mile_tracking_number" | "plp_number,first_mile_tracking_number,last_mile_tracking_number" | "plp_number,last_mile_tracking_number,first_mile_tracking_number" | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {} | undefined;
}>;
//# sourceMappingURL=v2-logistic-get-tracking-number.d.ts.map