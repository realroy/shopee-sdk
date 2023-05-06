import { z } from "zod";
export declare const ITEM_STATUS: readonly ["NORMAL", "DELETED", "UNLIST", "BANNED"];
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
declare const itemSchema: z.ZodObject<{
    item_id: z.ZodNumber;
    item_status: z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>;
    update_time: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
    item_id: number;
    update_time: number;
}, {
    item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
    item_id: number;
    update_time: number;
}>;
export declare const getItemListResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    warning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    request_id: z.ZodString;
    response: z.ZodOptional<z.ZodObject<{
        item: z.ZodOptional<z.ZodArray<z.ZodOptional<z.ZodObject<{
            item_id: z.ZodNumber;
            item_status: z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>;
            update_time: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        }, {
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        }>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        item?: ({
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        } | undefined)[] | undefined;
    }, {
        item?: ({
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        } | undefined)[] | undefined;
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
        item?: ({
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        } | undefined)[] | undefined;
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
        item?: ({
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        } | undefined)[] | undefined;
    } | undefined;
    total_count?: number | undefined;
    has_next_page?: boolean | undefined;
    next_offset?: number | undefined;
}>;
export type GetItemListItem = z.infer<typeof itemSchema>;
export type GetItemListResponse = z.infer<typeof getItemListResponseSchema>;
export type GetItemListRequestParameters = z.infer<typeof getItemListRequestParametersSchema>;
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
        item?: ({
            item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            item_id: number;
            update_time: number;
        } | undefined)[] | undefined;
    } | undefined;
    total_count?: number | undefined;
    has_next_page?: boolean | undefined;
    next_offset?: number | undefined;
}>;
export default getItemList;
//# sourceMappingURL=get-item-list.d.ts.map