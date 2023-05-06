import type { GetItemListItem, GetItemListResponse } from "@shopee-sdk/core";
export declare function createGetItemListItem(args?: Partial<GetItemListItem>): GetItemListItem;
export declare function createGetItemListResponse(args?: Partial<GetItemListResponse>): GetItemListResponse;
export declare const MOCKED_GET_ITEM_LIST_ITEMS: {
    item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
    item_id: number;
    update_time: number;
}[];
export declare const getItemListMockHandlers: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
//# sourceMappingURL=get-item-list.d.ts.map