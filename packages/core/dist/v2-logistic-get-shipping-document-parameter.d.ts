import { z } from "zod";
export declare const logisticGetShippingDocumentParameterRequestParameterSchema: z.ZodObject<{
    orderList: z.ZodArray<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: number | undefined;
    }, {
        orderSn: string;
        packageNumber?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderList: {
        orderSn: string;
        packageNumber?: number | undefined;
    }[];
}, {
    orderList: {
        orderSn: string;
        packageNumber?: number | undefined;
    }[];
}>;
export declare const logisticGetShippingDocumentParameterResponseSchema: z.ZodObject<{
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
        packageNumber: z.ZodOptional<z.ZodNumber>;
        suggestShippingDocumentType: z.ZodString;
        selectableShippingDocumentType: z.ZodArray<z.ZodString, "many">;
        failError: z.ZodString;
        failMessage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        suggestShippingDocumentType: string;
        selectableShippingDocumentType: string[];
        failError: string;
        failMessage: string;
        packageNumber?: number | undefined;
    }, {
        orderSn: string;
        suggestShippingDocumentType: string;
        selectableShippingDocumentType: string[];
        failError: string;
        failMessage: string;
        packageNumber?: number | undefined;
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
        orderSn: string;
        suggestShippingDocumentType: string;
        selectableShippingDocumentType: string[];
        failError: string;
        failMessage: string;
        packageNumber?: number | undefined;
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
        orderSn: string;
        suggestShippingDocumentType: string;
        selectableShippingDocumentType: string[];
        failError: string;
        failMessage: string;
        packageNumber?: number | undefined;
    } | undefined;
}>;
export declare const getShippingDocumentParameter: (requestParameters: {
    orderList: {
        orderSn: string;
        packageNumber?: number | undefined;
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
        orderSn: string;
        suggestShippingDocumentType: string;
        selectableShippingDocumentType: string[];
        failError: string;
        failMessage: string;
        packageNumber?: number | undefined;
    } | undefined;
}>;
//# sourceMappingURL=v2-logistic-get-shipping-document-parameter.d.ts.map