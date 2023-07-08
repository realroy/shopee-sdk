import { z } from "zod";
export declare const handleBuyerCancellationRequestParametersSchema: z.ZodObject<{
    orderSn: z.ZodString;
    operation: z.ZodEnum<["ACCEPT", "REJECT"]>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    operation: "ACCEPT" | "REJECT";
}, {
    orderSn: string;
    operation: "ACCEPT" | "REJECT";
}>;
export declare const handleBuyerCancellationResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodObject<{
        updateTime: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        updateTime: number;
    }, {
        updateTime: number;
    }>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    response: {
        updateTime: number;
    };
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}, {
    response: {
        updateTime: number;
    };
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
export declare const handleBuyerCancellation: (requestParameters: {
    orderSn: string;
    operation: "ACCEPT" | "REJECT";
}) => Promise<{
    response: {
        updateTime: number;
    };
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=v2-order-handle-buyer-cancellation.d.ts.map