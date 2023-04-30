import { rest } from "msw";
import { faker } from "@faker-js/faker";

import { toTimestamp } from "@/utils";

import { API_V2_PRODUCT_GET_ITEM_LIST } from "./get-item-list";

import {
  GetItemListItem,
  GetItemListRequestParameters,
  GetItemListResponse,
} from "./get-item-list";

export function createGetItemListItem(
  args?: Partial<GetItemListItem>
): GetItemListItem {
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

export function createGetItemListItemList(n: number): GetItemListItem[] {
  if (n <= 0) {
    throw new Error("n must be positive");
  }

  const result: GetItemListItem[] = [];

  for (let i = 0; i < n; i++) {
    const getItemListItem = createGetItemListItem({
      item_id: i,
    });
    result.push(getItemListItem);
  }

  return result;
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

export const getItemListMockHandlers = rest.get<
  {},
  Record<keyof GetItemListRequestParameters, string>
>(API_V2_PRODUCT_GET_ITEM_LIST, (req, res, ctx) => {
  const { page_size, offset, item_status: itemStatus } = req.params;
  const pageSize = +page_size ?? 10;
  const parsedOffset = +offset ?? 0;

  const items = new Array(pageSize)
    .map((_, index) =>
      createGetItemListItem({
        item_id: pageSize * parsedOffset + index + 1,
      })
    )
    .filter((item) => itemStatus.includes(item.item_status));

  return res(
    ctx.status(200),
    ctx.json(
      createGetItemListResponse({
        response: {
          item: items,
        },
      })
    )
  );
});
