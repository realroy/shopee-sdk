import { GetItemListItem, GetItemListResponse } from "./get-item-list";
export declare function createGetItemListItem(args?: Partial<GetItemListItem>): GetItemListItem;
export declare function createGetItemListResponse(args?: Partial<GetItemListResponse>): GetItemListResponse;
export declare const MOCKED_GET_ITEM_LIST_ITEMS: {
    item_status: "NORMAL" | "DELETED" | "UNLIST" | "BANNED";
    item_id: number;
    update_time: number;
}[];
export declare const getItemListMockHandlers: import("msw").RestHandler<import("msw/lib/glossary-de6278a9").M<import("msw/lib/glossary-de6278a9").h>>;
