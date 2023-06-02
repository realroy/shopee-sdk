import { z } from "zod";
export declare const logisticUpdateShipOrderRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodString>;
    pickup: z.ZodObject<{
        addressId: z.ZodNumber;
        pickupTimeId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        addressId: number;
        pickupTimeId: string;
    }, {
        addressId: number;
        pickupTimeId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    pickup: {
        addressId: number;
        pickupTimeId: string;
    };
    packageNumber?: string | undefined;
}, {
    orderSn: string;
    pickup: {
        addressId: number;
        pickupTimeId: string;
    };
    packageNumber?: string | undefined;
}>;
export declare const logisticUpdateShipOrderResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
export declare const updateShipOrder: (requestParameters: {
    orderSn: string;
    pickup: {
        addressId: number;
        pickupTimeId: string;
    };
    packageNumber?: string | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=v2-logistic.update-ship-order.d.ts.map