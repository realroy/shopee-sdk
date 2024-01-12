import { z } from "zod";
export declare const getItemExtraInfoRequestParametersSchema: z.ZodObject<{
    itemIdList: z.ZodString;
}, "strip", z.ZodTypeAny, {
    itemIdList: string;
}, {
    itemIdList: string;
}>;
export declare const getItemExtraInfoResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    warning: z.ZodOptional<z.ZodString>;
    requestId: z.ZodString;
    response: z.ZodOptional<z.ZodObject<{
        itemList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            itemId: z.ZodNumber;
            sale: z.ZodNumber;
            views: z.ZodNumber;
            likes: z.ZodNumber;
            ratingStar: z.ZodNumber;
            commentCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }, {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    }, {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    requestId: string;
    error: string;
    warning?: string | undefined;
    response?: {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    } | undefined;
}, {
    message: string;
    requestId: string;
    error: string;
    warning?: string | undefined;
    response?: {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    } | undefined;
}>;
export declare const getItemExtraInfo: (requestParameters: {
    itemIdList: string;
}) => Promise<{
    message: string;
    requestId: string;
    error: string;
    warning?: string | undefined;
    response?: {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    } | undefined;
}>;
//# sourceMappingURL=v2-product-get-item-extra-info.d.ts.map