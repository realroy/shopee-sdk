import { z } from "zod";
export declare const getOrderListRequestParametersSchema: z.ZodObject<{
    time_range_field: z.ZodEnum<["create_time", "update_time"]>;
    time_from: z.ZodDate;
    time_to: z.ZodDate;
    page_size: z.ZodNumber;
    cursor: z.ZodOptional<z.ZodString>;
    order_status: z.ZodOptional<z.ZodEnum<["UNPAID", "READY_TO_SHIP", "PROCESSED", "SHIPPED", "COMPLETED", "IN_CANCEL", "CANCELLED", "INVOICE_PENDING"]>>;
    response_optional_fields: z.ZodDefault<z.ZodOptional<z.ZodEnum<["order_status"]>>>;
}, "strip", z.ZodTypeAny, {
    response_optional_fields: "order_status";
    time_range_field: "create_time" | "update_time";
    time_from: Date;
    time_to: Date;
    page_size: number;
    cursor?: string | undefined;
    order_status?: "UNPAID" | "READY_TO_SHIP" | "PROCESSED" | "SHIPPED" | "COMPLETED" | "IN_CANCEL" | "CANCELLED" | "INVOICE_PENDING" | undefined;
}, {
    time_range_field: "create_time" | "update_time";
    time_from: Date;
    time_to: Date;
    page_size: number;
    cursor?: string | undefined;
    order_status?: "UNPAID" | "READY_TO_SHIP" | "PROCESSED" | "SHIPPED" | "COMPLETED" | "IN_CANCEL" | "CANCELLED" | "INVOICE_PENDING" | undefined;
    response_optional_fields?: "order_status" | undefined;
}>;
export declare const getOrderListResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    response: z.ZodOptional<z.ZodObject<{
        more: z.ZodBoolean;
        next_cursor: z.ZodString;
        order_list: z.ZodArray<z.ZodObject<{
            order_sn: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            order_sn: string;
        }, {
            order_sn: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        order_list: {
            order_sn: string;
        }[];
        more: boolean;
        next_cursor: string;
    }, {
        order_list: {
            order_sn: string;
        }[];
        more: boolean;
        next_cursor: string;
    }>>;
    request_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        order_list: {
            order_sn: string;
        }[];
        more: boolean;
        next_cursor: string;
    } | undefined;
}, {
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        order_list: {
            order_sn: string;
        }[];
        more: boolean;
        next_cursor: string;
    } | undefined;
}>;
export declare const getOrderList: (requestParameters: {
    response_optional_fields: "order_status";
    time_range_field: "create_time" | "update_time";
    time_from: Date;
    time_to: Date;
    page_size: number;
    cursor?: string | undefined;
    order_status?: "UNPAID" | "READY_TO_SHIP" | "PROCESSED" | "SHIPPED" | "COMPLETED" | "IN_CANCEL" | "CANCELLED" | "INVOICE_PENDING" | undefined;
}) => Promise<{
    request_id: string;
    error?: string | undefined;
    message?: string | undefined;
    response?: {
        order_list: {
            order_sn: string;
        }[];
        more: boolean;
        next_cursor: string;
    } | undefined;
}>;
//# sourceMappingURL=v2-order-get-order-list.d.ts.map