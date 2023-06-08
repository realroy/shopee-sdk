import { z } from "zod";
export declare const getItemListRequestParametersSchema: z.ZodObject<{
    offset: z.ZodOptional<z.ZodNumber>;
    pageSize: z.ZodOptional<z.ZodNumber>;
    updateTimeFrom: z.ZodOptional<z.ZodDate>;
    updateTimeTo: z.ZodOptional<z.ZodDate>;
    itemStatus: z.ZodArray<z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>, "many">;
}, "strip", z.ZodTypeAny, {
    itemStatus: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    pageSize?: number | undefined;
    updateTimeFrom?: Date | undefined;
    updateTimeTo?: Date | undefined;
}, {
    itemStatus: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    pageSize?: number | undefined;
    updateTimeFrom?: Date | undefined;
    updateTimeTo?: Date | undefined;
}>;
export declare const getItemListResponseSchema: z.ZodObject<{
    error: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    warning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestId: z.ZodString;
    response: z.ZodOptional<z.ZodObject<{
        item: z.ZodOptional<z.ZodArray<z.ZodObject<{
            itemId: z.ZodNumber;
            itemStatus: z.ZodEnum<["NORMAL", "DELETED", "UNLIST", "BANNED"]>;
            updateTime: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }, {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        item?: {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }[] | undefined;
    }, {
        item?: {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }[] | undefined;
    }>>;
    totalCount: z.ZodOptional<z.ZodNumber>;
    hasNextPage: z.ZodOptional<z.ZodBoolean>;
    nextOffset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    error?: string | undefined;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }[] | undefined;
    } | undefined;
    totalCount?: number | undefined;
    hasNextPage?: boolean | undefined;
    nextOffset?: number | undefined;
}, {
    requestId: string;
    error?: string | undefined;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }[] | undefined;
    } | undefined;
    totalCount?: number | undefined;
    hasNextPage?: boolean | undefined;
    nextOffset?: number | undefined;
}>;
export declare const getItemList: (requestParameters: {
    itemStatus: ("NORMAL" | "DELETED" | "UNLIST" | "BANNED")[];
    offset?: number | undefined;
    pageSize?: number | undefined;
    updateTimeFrom?: Date | undefined;
    updateTimeTo?: Date | undefined;
}) => Promise<{
    requestId: string;
    error?: string | undefined;
    message?: string | null | undefined;
    warning?: string | null | undefined;
    response?: {
        item?: {
            itemId: number;
            itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
            updateTime?: number | undefined;
        }[] | undefined;
    } | undefined;
    totalCount?: number | undefined;
    hasNextPage?: boolean | undefined;
    nextOffset?: number | undefined;
}>;
//# sourceMappingURL=v2-product-get-item-list.d.ts.map