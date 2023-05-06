import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { toTimestamp, API_V2_PRODUCT_GET_ITEM_LIST_PATH } from "@shopee-sdk/core";

import { mockURL } from './utils'

import type { GetItemListResponseItem, GetItemListResponse } from "@shopee-sdk/core";

export function createGetItemListItem(
  args?: Partial<GetItemListResponseItem>
): GetItemListResponseItem {
  return {
    item_id: args?.item_id ?? faker.datatype.number(),
    item_status:
      args?.item_status ??
      faker.helpers.arrayElement(["NORMAL", "DELETED", "UNLIST", "BANNED"]),
    update_time:
      args?.update_time ??
      +toTimestamp(
        faker.datatype.datetime({
          min: new Date("01/01/2022").getTime(),
          max: new Date().getTime(),
        })
      ),
  };
}

export function createGetItemListResponse(
  args?: Partial<GetItemListResponse>
): GetItemListResponse {
  return {
    error: args?.error ?? "",
    message: args?.message ?? "",
    warning: args?.warning ?? "",
    request_id: args?.request_id ?? faker.datatype.uuid(),
    response: args?.response ?? { item: [] },
  };
}

export const MOCKED_GET_ITEM_LIST_ITEMS = [
  createGetItemListItem({ item_id: 1, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 2, item_status: "DELETED" }),
  createGetItemListItem({ item_id: 3, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 4, item_status: "BANNED" }),
  createGetItemListItem({ item_id: 5, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 6, item_status: "BANNED" }),
  createGetItemListItem({ item_id: 7, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 8, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 9, item_status: "DELETED" }),
  createGetItemListItem({ item_id: 10, item_status: "NORMAL" }),
  createGetItemListItem({ item_id: 11, item_status: "UNLIST" }),
  createGetItemListItem({ item_id: 12, item_status: "UNLIST" }),
  createGetItemListItem({ item_id: 13, item_status: "NORMAL" }),
];

export const getItemListMockHandlers = rest.get(
  mockURL(API_V2_PRODUCT_GET_ITEM_LIST_PATH),
  (req, res, ctx) => {
    const { searchParams } = req.url;
    const pageSize = +(searchParams.get("page_size") ?? 10);
    const offset = +(searchParams.get("offset") ?? 0);
    const itemStatus = searchParams.getAll("item_status");

    const startIndex = offset * pageSize;
    const items = MOCKED_GET_ITEM_LIST_ITEMS.slice(
      startIndex,
      startIndex + pageSize
    ).filter((item) => itemStatus.includes(item.item_status));

    const json = createGetItemListResponse({
      response: {
        item: items,
      },
    });

    return res(ctx.status(200), ctx.json(json));
  }
);
