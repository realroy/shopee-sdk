import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH } from "@shopee-sdk/core";

import { mockURL } from "./utils";

import { MOCKED_GET_ITEM_LIST_ITEMS } from "./v2-product-get-item-list";

import type {
  GetItemExtraInfoResponseItem,
  GetItemExtraInfoResponse,
} from "@shopee-sdk/core";

export function createGetItemExtraInfoItem(
  args?: Partial<GetItemExtraInfoResponseItem>
) {
  return {
    item_id: args?.item_id ?? faker.datatype.number(),
    sale: args?.sale ?? faker.datatype.number(),
    views: args?.views ?? faker.datatype.number(),
    likes: args?.likes ?? faker.datatype.number(),
    rating_star: args?.rating_star ?? faker.datatype.number(),
    comment_count: args?.comment_count ?? faker.datatype.number(),
  } satisfies GetItemExtraInfoResponseItem;
}

export function createGetItemBaseInfoResponse(
  args?: Partial<GetItemExtraInfoResponse>
) {
  return {
    error: args?.error ?? "",
    message: args?.message ?? "",
    warning: args?.warning ?? "",
    request_id: args?.request_id ?? faker.datatype.uuid(),
    response: args?.response ?? { item_list: [] },
  } satisfies GetItemExtraInfoResponse;
}

export const MOCKED_GET_ITEM_EXTRA_INFO = MOCKED_GET_ITEM_LIST_ITEMS.map(
  ({ item_id }) => {
    return createGetItemExtraInfoItem({ item_id });
  }
);

export const getItemExtraInfoMockHandler = rest.get(
  mockURL(API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH),
  (req, res, ctx) => {
    const itemIdList = req.url.searchParams.get("item_id_list");

    return res(
      ctx.status(200),
      ctx.json(
        createGetItemBaseInfoResponse({
          response: {
            item_list: MOCKED_GET_ITEM_EXTRA_INFO.filter((item) =>
              itemIdList?.includes(item.item_id.toString())
            ),
          },
        })
      )
    );
  }
);
