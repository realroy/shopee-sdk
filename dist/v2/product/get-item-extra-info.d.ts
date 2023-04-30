import { z } from "zod";
export declare const API_V2_PRODUCT_GET_ITEM_EXTRA_INFO = "/api/v2/product/get_item_extra_info";
export declare const getItemExtraInfoRequestParametersSchema: z.ZodObject<{
    item_id_list: z.ZodString;
}, "strip", z.ZodTypeAny, {
    item_id_list: string;
}, {
    item_id_list: string;
}>;
declare const itemSchema: z.ZodObject<{
    item_id: z.ZodNumber;
    sale: z.ZodNumber;
    views: z.ZodNumber;
    likes: z.ZodNumber;
    rating_star: z.ZodNumber;
    comment_count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    item_id: number;
    sale: number;
    views: number;
    likes: number;
    rating_star: number;
    comment_count: number;
}, {
    item_id: number;
    sale: number;
    views: number;
    likes: number;
    rating_star: number;
    comment_count: number;
}>;
export declare const getItemExtraInfoResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    warning: z.ZodOptional<z.ZodString>;
    request_id: z.ZodString;
    response: z.ZodOptional<z.ZodObject<{
        item_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            item_id: z.ZodNumber;
            sale: z.ZodNumber;
            views: z.ZodNumber;
            likes: z.ZodNumber;
            rating_star: z.ZodNumber;
            comment_count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }, {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    }, {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    error: string;
    request_id: string;
    warning?: string | undefined;
    response?: {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    } | undefined;
}, {
    message: string;
    error: string;
    request_id: string;
    warning?: string | undefined;
    response?: {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    } | undefined;
}>;
export type GetItemExtraInfoResponse = z.infer<typeof getItemExtraInfoResponseSchema>;
export type GetItemExtraInfoItem = z.infer<typeof itemSchema>;
export type GetItemExtraInfoRequestParameters = z.infer<typeof getItemExtraInfoRequestParametersSchema>;
export declare const getItemExtraInfo: (requestParameters: {
    item_id_list: string;
}) => Promise<{
    message: string;
    error: string;
    request_id: string;
    warning?: string | undefined;
    response?: {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    } | undefined;
}>;
export default getItemExtraInfo;
