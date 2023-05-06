import type { GetItemListResponseItem, GetItemListResponse } from "@shopee-sdk/core";
export declare function createGetItemListItem(args?: Partial<GetItemListResponseItem>): GetItemListResponseItem;
export declare function createGetItemListResponse(args?: Partial<GetItemListResponse>): GetItemListResponse;
export declare const MOCKED_GET_ITEM_LIST_ITEMS: {
    item_id: number;
    update_time: number;
    item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
}[];
export declare const getItemListMockHandlers: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=v2-product-get-item-list.d.ts.map