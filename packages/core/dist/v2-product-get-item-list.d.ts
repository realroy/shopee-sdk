import { z } from "zod";
export declare const getItemListRequestParametersSchema: z.ZodObject<{
    offset: z.ZodOptional<z.ZodNumber>;
    page_size: z.ZodOptional<z.ZodNumber>;
    update_time_from: z.ZodOptional<z.ZodDate>;
    update_time_to: z.ZodOptional<z.ZodDate>;
    item_status: z.ZodArray<z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>, "many">;
}, "strip", z.ZodTypeAny, {
    item_status: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    page_size?: number | undefined;
    update_time_from?: Date | undefined;
    update_time_to?: Date | undefined;
}, {
    item_status: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    page_size?: number | undefined;
    update_time_from?: Date | undefined;
    update_time_to?: Date | undefined;
}>;
export declare const getItemListResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    warning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    request_id: z.ZodString;
    response: z.ZodOptional<z.ZodObject<{
        item: z.ZodOptional<z.ZodArray<z.ZodObject<{
            item_id: z.ZodNumber;
            item_status: z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>;
            update_time: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }, {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        item?: {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }[] | undefined;
    }, {
        item?: {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }[] | undefined;
    }>>;
    total_count: z.ZodOptional<z.ZodNumber>;
    has_next_page: z.ZodOptional<z.ZodBoolean>;
    next_offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    error: string;
    request_id: string;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }[] | undefined;
    } | undefined;
    total_count?: number | undefined;
    has_next_page?: boolean | undefined;
    next_offset?: number | undefined;
}, {
    error: string;
    request_id: string;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }[] | undefined;
    } | undefined;
    total_count?: number | undefined;
    has_next_page?: boolean | undefined;
    next_offset?: number | undefined;
}>;
export declare const getItemList: (requestParameters: {
    item_status: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    page_size?: number | undefined;
    update_time_from?: Date | undefined;
    update_time_to?: Date | undefined;
}) => Promise<{
    error: string;
    request_id: string;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            update_time: number;
            item_id: number;
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
        }[] | undefined;
    } | undefined;
    total_count?: number | undefined;
    has_next_page?: boolean | undefined;
    next_offset?: number | undefined;
}>;
//# sourceMappingURL=v2-product-get-item-list.d.ts.map