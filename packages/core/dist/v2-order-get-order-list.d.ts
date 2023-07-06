import { z } from "zod";
export declare const getOrderListRequestParametersSchema: z.ZodObject<{
    timeRangeField: z.ZodEnum<["create_time", "update_time"]>;
    timeFrom: z.ZodDate;
    timeTo: z.ZodDate;
    pageSize: z.ZodNumber;
    cursor: z.ZodOptional<z.ZodString>;
    orderStatus: z.ZodOptional<z.ZodEnum<["UNPAID", "READY_TO_SHIP", "RETRY_SHIP", "IN_CANCEL", "CANCELLED", "PROCESSED", "SHIPPED", "TO_RETURN", "TO_CONFIRM_RECEIVE", "COMPLETED"]>>;
    responseOptionalFields: z.ZodDefault<z.ZodOptional<z.ZodEnum<["order_status"]>>>;
}, "strip", z.ZodTypeAny, {
    responseOptionalFields: "order_status";
    timeRangeField: "create_time" | "update_time";
    timeFrom: Date;
    timeTo: Date;
    pageSize: number;
    cursor?: string | undefined;
    orderStatus?: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED" | undefined;
}, {
    timeRangeField: "create_time" | "update_time";
    timeFrom: Date;
    timeTo: Date;
    pageSize: number;
    cursor?: string | undefined;
    orderStatus?: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED" | undefined;
    responseOptionalFields?: "order_status" | undefined;
}>;
export declare const getOrderListResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        more: z.ZodBoolean;
        nextCursor: z.ZodString;
        orderList: z.ZodArray<z.ZodObject<{
            orderSn: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            orderSn: string;
        }, {
            orderSn: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        orderList: {
            orderSn: string;
        }[];
        more: boolean;
        nextCursor: string;
    }, {
        orderList: {
            orderSn: string;
        }[];
        more: boolean;
        nextCursor: string;
    }>>;
    requestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
        }[];
        more: boolean;
        nextCursor: string;
    } | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
        }[];
        more: boolean;
        nextCursor: string;
    } | undefined;
}>;
export declare const getOrderList: (requestParameters: {
    responseOptionalFields: "order_status";
    timeRangeField: "create_time" | "update_time";
    timeFrom: Date;
    timeTo: Date;
    pageSize: number;
    cursor?: string | undefined;
    orderStatus?: "UNPAID" | "READY_TO_SHIP" | "RETRY_SHIP" | "IN_CANCEL" | "CANCELLED" | "PROCESSED" | "SHIPPED" | "TO_RETURN" | "TO_CONFIRM_RECEIVE" | "COMPLETED" | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        orderList: {
            orderSn: string;
        }[];
        more: boolean;
        nextCursor: string;
    } | undefined;
}>;
//# sourceMappingURL=v2-order-get-order-list.d.ts.map