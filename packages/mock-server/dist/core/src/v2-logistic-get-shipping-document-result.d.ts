import { z } from "zod";
export declare const logisticGetShippingDocumentResultRequestParameterSchema: z.ZodObject<{
    orderList: z.ZodArray<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodString>;
        shippingDocumentType: z.ZodOptional<z.ZodEnum<["NORMAL_AIR_WAYBILL", "THERMAL_AIR_WAYBILL", "NORMAL_JOB_AIR_WAYBILL", "THERMAL_JOB_AIR_WAYBILL"]>>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }, {
        orderSn: string;
        packageNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}, {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}>;
export declare const logisticGetShippingDocumentResultResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    warning: z.ZodOptional<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: number | undefined;
    }, {
        orderSn: string;
        packageNumber?: number | undefined;
    }>>;
    response: z.ZodOptional<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodString;
        status: z.ZodEnum<["READY", "FAILED", "PROCESSING"]>;
        failError: z.ZodString;
        failMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "READY" | "FAILED" | "PROCESSING";
        orderSn: string;
        packageNumber: string;
        failError: string;
        failMessage: string;
    }, {
        status: "READY" | "FAILED" | "PROCESSING";
        orderSn: string;
        packageNumber: string;
        failError: string;
        failMessage: string;
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    warning?: {
        orderSn: string;
        packageNumber?: number | undefined;
    } | undefined;
    response?: {
        status: "READY" | "FAILED" | "PROCESSING";
        orderSn: string;
        packageNumber: string;
        failError: string;
        failMessage: string;
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    warning?: {
        orderSn: string;
        packageNumber?: number | undefined;
    } | undefined;
    response?: {
        status: "READY" | "FAILED" | "PROCESSING";
        orderSn: string;
        packageNumber: string;
        failError: string;
        failMessage: string;
    } | undefined;
}>;
export declare const getShippingDocumentResult: (requestParameters: {
    orderList: {
        orderSn: string;
        packageNumber?: string | undefined;
        shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
    }[];
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    warning?: {
        orderSn: string;
        packageNumber?: number | undefined;
    } | undefined;
    response?: {
        status: "READY" | "FAILED" | "PROCESSING";
        orderSn: string;
        packageNumber: string;
        failError: string;
        failMessage: string;
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic-get-shipping-document-result.d.ts.map