import { z } from "zod";
export declare const logisticGetTrackingNumberRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodNumber>;
    responseOptionalFields: z.ZodOptional<z.ZodArray<z.ZodEnum<["plp_number", "first_mile_tracking_number", "last_mile_tracking_number"]>, "many">>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: ("plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number")[] | undefined;
}, {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: ("plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number")[] | undefined;
}>;
export declare const logisticGetTrackingNumberResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        firstMileTrackingNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hint: z.ZodOptional<z.ZodString>;
        lastMileTrackingNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        plpNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        trackingNumber: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        trackingNumber: string | null;
        firstMileTrackingNumber?: string | null | undefined;
        hint?: string | undefined;
        lastMileTrackingNumber?: string | null | undefined;
        plpNumber?: string | null | undefined;
    }, {
        trackingNumber: string | null;
        firstMileTrackingNumber?: string | null | undefined;
        hint?: string | undefined;
        lastMileTrackingNumber?: string | null | undefined;
        plpNumber?: string | null | undefined;
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        trackingNumber: string | null;
        firstMileTrackingNumber?: string | null | undefined;
        hint?: string | undefined;
        lastMileTrackingNumber?: string | null | undefined;
        plpNumber?: string | null | undefined;
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        trackingNumber: string | null;
        firstMileTrackingNumber?: string | null | undefined;
        hint?: string | undefined;
        lastMileTrackingNumber?: string | null | undefined;
        plpNumber?: string | null | undefined;
    } | undefined;
}>;
export declare const getTrackingNumber: (requestParameters: {
    orderSn: string;
    packageNumber?: number | undefined;
    responseOptionalFields?: ("plp_number" | "first_mile_tracking_number" | "last_mile_tracking_number")[] | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        trackingNumber: string | null;
        firstMileTrackingNumber?: string | null | undefined;
        hint?: string | undefined;
        lastMileTrackingNumber?: string | null | undefined;
        plpNumber?: string | null | undefined;
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic-get-tracking-number.d.ts.map