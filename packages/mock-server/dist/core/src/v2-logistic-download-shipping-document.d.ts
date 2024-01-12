/// <reference types="node" />
import { z } from "zod";
import { Readable } from "stream";
export declare const logisticDownloadShippingDocumentRequestParameterSchema: z.ZodObject<{
    shippingDocumentType: z.ZodOptional<z.ZodEnum<["NORMAL_AIR_WAYBILL", "THERMAL_AIR_WAYBILL", "NORMAL_JOB_AIR_WAYBILL", "THERMAL_JOB_AIR_WAYBILL"]>>;
    orderList: z.ZodArray<z.ZodObject<{
        orderSn: z.ZodString;
        packageNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        orderSn: string;
        packageNumber?: string | null | undefined;
    }, {
        orderSn: string;
        packageNumber?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderList: {
        orderSn: string;
        packageNumber?: string | null | undefined;
    }[];
    shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
}, {
    orderList: {
        orderSn: string;
        packageNumber?: string | null | undefined;
    }[];
    shippingDocumentType?: "NORMAL_AIR_WAYBILL" | "THERMAL_AIR_WAYBILL" | "NORMAL_JOB_AIR_WAYBILL" | "THERMAL_JOB_AIR_WAYBILL" | undefined;
}>;
export declare const logisticDownloadShippingDocumentResponseSchema: z.ZodObject<{
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    data: string;
}, {
    data: string;
}>;
export declare function downloadShippingDocument(requestParameter: z.infer<typeof logisticDownloadShippingDocumentRequestParameterSchema>): Promise<Readable>;
//# sourceMappingURL=v2-logistic-download-shipping-document.d.ts.map