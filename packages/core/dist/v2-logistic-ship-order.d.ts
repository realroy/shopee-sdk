import { z } from "zod";
export declare const logisticShipOrderRequestParameterSchema: z.ZodObject<{
    orderSn: z.ZodString;
    packageNumber: z.ZodOptional<z.ZodString>;
    pickup: z.ZodOptional<z.ZodObject<{
        addressId: z.ZodOptional<z.ZodNumber>;
        pickupTimeId: z.ZodOptional<z.ZodString>;
        trackingNumber: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        trackingNumber: string | null;
        addressId?: number | undefined;
        pickupTimeId?: string | undefined;
    }, {
        addressId?: number | undefined;
        pickupTimeId?: string | undefined;
        trackingNumber?: string | null | undefined;
    }>>;
    dropoff: z.ZodOptional<z.ZodObject<{
        branchId: z.ZodOptional<z.ZodNumber>;
        senderRealName: z.ZodOptional<z.ZodString>;
        trackingNumber: z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        slug: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        trackingNumber: string | null;
        branchId?: number | undefined;
        senderRealName?: string | undefined;
        slug?: string | undefined;
    }, {
        branchId?: number | undefined;
        senderRealName?: string | undefined;
        trackingNumber?: string | null | undefined;
        slug?: string | undefined;
    }>>;
    nonIntegrated: z.ZodOptional<z.ZodObject<{
        trackingNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        trackingNumber?: string | undefined;
    }, {
        trackingNumber?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    orderSn: string;
    packageNumber?: string | undefined;
    pickup?: {
        trackingNumber: string | null;
        addressId?: number | undefined;
        pickupTimeId?: string | undefined;
    } | undefined;
    dropoff?: {
        trackingNumber: string | null;
        branchId?: number | undefined;
        senderRealName?: string | undefined;
        slug?: string | undefined;
    } | undefined;
    nonIntegrated?: {
        trackingNumber?: string | undefined;
    } | undefined;
}, {
    orderSn: string;
    packageNumber?: string | undefined;
    pickup?: {
        addressId?: number | undefined;
        pickupTimeId?: string | undefined;
        trackingNumber?: string | null | undefined;
    } | undefined;
    dropoff?: {
        branchId?: number | undefined;
        senderRealName?: string | undefined;
        trackingNumber?: string | null | undefined;
        slug?: string | undefined;
    } | undefined;
    nonIntegrated?: {
        trackingNumber?: string | undefined;
    } | undefined;
}>;
export declare const logisticShipOrderResponseSchema: z.ZodObject<{
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
export declare const shipOrder: (requestParameters: {
    orderSn: string;
    packageNumber?: string | undefined;
    pickup?: {
        trackingNumber: string | null;
        addressId?: number | undefined;
        pickupTimeId?: string | undefined;
    } | undefined;
    dropoff?: {
        trackingNumber: string | null;
        branchId?: number | undefined;
        senderRealName?: string | undefined;
        slug?: string | undefined;
    } | undefined;
    nonIntegrated?: {
        trackingNumber?: string | undefined;
    } | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
}>;
//# sourceMappingURL=v2-logistic-ship-order.d.ts.map