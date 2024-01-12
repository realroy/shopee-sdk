import type { GetItemListResponseItem, GetItemListResponse } from "@shopee-sdk/core";
export declare function createGetItemListItem(args?: Partial<GetItemListResponseItem>): GetItemListResponseItem;
export declare function createGetItemListResponse(args?: Partial<GetItemListResponse>): GetItemListResponse;
export declare const MOCKED_GET_ITEM_LIST_ITEMS: {
    itemId: number;
    itemStatus: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
    updateTime?: number | undefined;
}[];
export declare const getItemListMockHandlers: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-product-get-item-list.d.ts.map