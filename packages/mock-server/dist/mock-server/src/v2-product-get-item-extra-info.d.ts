import type { GetItemExtraInfoResponseItem, GetItemExtraInfoResponse } from "@shopee-sdk/core";
export declare function createGetItemExtraInfoItem(args?: Partial<GetItemExtraInfoResponseItem>): {
    item_id: any;
    sale: number;
    views: number;
    likes: number;
    rating_star: any;
    comment_count: any;
};
export declare function createGetItemBaseInfoResponse(args?: Partial<GetItemExtraInfoResponse>): {
    error: string;
    message: string;
    warning: string;
    request_id: any;
    response: {
        itemList?: {
            itemId: number;
            sale: number;
            views: number;
            likes: number;
            ratingStar: number;
            commentCount: number;
        }[] | undefined;
    } | {
        item_list: never[];
    };
};
export declare const MOCKED_GET_ITEM_EXTRA_INFO: {
    item_id: any;
    sale: number;
    views: number;
    likes: number;
    rating_star: any;
    comment_count: any;
}[];
export declare const getItemExtraInfoMockHandler: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-product-get-item-extra-info.d.ts.map