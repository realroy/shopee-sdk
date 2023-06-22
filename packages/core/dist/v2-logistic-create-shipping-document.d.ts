import { z } from "zod";
export declare const logisticCreateShippingDocumentRequestParameterSchema: z.ZodObject<{
    orderList: z.ZodArray<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodString>;
        trackingNumber: z.ZodOptional<z.ZodString>;
        shippingDocumentType: z.ZodOptional<z.ZodEnum<["NORMAL_AIR_WAYBILL", "THERMAL_AIR_WAYBILL", "NORMAL_JOB_AIR_WAYBILL", "THERMAL_JOB_AIR_WAYBILL"]>>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: string | undefined;
        trackingNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }, {
        orderSn: string;
        packageNumber?: string | undefined;
        trackingNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        trackingNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}, {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        trackingNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}>;
export declare const logisticCreateShippingDocumentResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    warning: z.ZodOptional<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: string | undefined;
    }, {
        orderSn: string;
        packageNumber?: string | undefined;
    }>>;
    response: z.ZodOptional<z.ZodObject<{
        resultList: z.ZodArray<z.ZodObject<{
            orderSn: z.ZodOptional<z.ZodString>;
            packageNumber: z.ZodOptional<z.ZodString>;
            failError: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            failMessage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }, {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        resultList: {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }[];
    }, {
        resultList: {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }[];
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    warning?: {
        orderSn: string;
        packageNumber?: string | undefined;
    } | undefined;
    response?: {
        resultList: {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }[];
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    warning?: {
        orderSn: string;
        packageNumber?: string | undefined;
    } | undefined;
    response?: {
        resultList: {
            orderSn?: string | undefined;
            packageNumber?: string | undefined;
            failError?: string | null | undefined;
            failMessage?: string | null | undefined;
        }[];
    } | undefined;
}>;
export declare const createShippingDocument: (requestParameters: {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        trackingNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}) => Promise<any>;
//# sourceMappingURL=v2-logistic-create-shipping-document.d.ts.map