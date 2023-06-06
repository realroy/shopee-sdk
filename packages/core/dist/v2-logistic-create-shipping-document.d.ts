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
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodString>;
        failError: z.ZodString;
        failMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        failError: string;
        failMessage: string;
        packageNumber?: string | undefined;
    }, {
        orderSn: string;
        failError: string;
        failMessage: string;
        packageNumber?: string | undefined;
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
        orderSn: string;
        failError: string;
        failMessage: string;
        packageNumber?: string | undefined;
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
        orderSn: string;
        failError: string;
        failMessage: string;
        packageNumber?: string | undefined;
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