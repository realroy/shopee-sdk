import { z } from "zod";
export declare const cancelOrderRequestParametersSchema: z.ZodObject<{
    orderSn: z.ZodString;
    cancelReason: z.ZodLiteral<"OUT_OF_STOCK">;
    itemList: z.ZodArray<z.ZodObject<{
        itemId: z.ZodNumber;
        modelId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        itemId: number;
        modelId: number;
    }, {
        itemId: number;
        modelId: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    cancelReason: "OUT_OF_STOCK";
    itemList: {
        itemId: number;
        modelId: number;
    }[];
}, {
    orderSn: string;
    cancelReason: "OUT_OF_STOCK";
    itemList: {
        itemId: number;
        modelId: number;
    }[];
}>;
export declare const cancelOrderResponseSchema: z.ZodObject<{
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
export declare const cancelOrder: (requestParameters: {
    orderSn: string;
    cancelReason: "OUT_OF_STOCK";
    itemList: {
        itemId: number;
        modelId: number;
    }[];
}) => Promise<{
    response: {
        updateTime: number;
    };
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=v2-order-cancel-order.d.ts.map