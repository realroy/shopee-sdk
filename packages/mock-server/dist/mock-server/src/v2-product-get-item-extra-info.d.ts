import type { GetItemExtraInfoResponseItem, GetItemExtraInfoResponse } from "@shopee-sdk/core";
export declare function createGetItemExtraInfoItem(args?: Partial<GetItemExtraInfoResponseItem>): {
    item_id: number;
    sale: number;
    views: number;
    likes: number;
    rating_star: number;
    comment_count: number;
};
export declare function createGetItemBaseInfoResponse(args?: Partial<GetItemExtraInfoResponse>): {
    error: string;
    message: string;
    warning: string;
    request_id: string;
    response: {
        item_list?: {
            item_id: number;
            sale: number;
            views: number;
            likes: number;
            rating_star: number;
            comment_count: number;
        }[] | undefined;
    };
};
export declare const MOCKED_GET_ITEM_EXTRA_INFO: {
    item_id: number;
    sale: number;
    views: number;
    likes: number;
    rating_star: number;
    comment_count: number;
}[];
export declare const getItemExtraInfoMockHandler: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-product-get-item-extra-info.d.ts.map