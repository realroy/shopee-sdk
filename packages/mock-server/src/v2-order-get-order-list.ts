import {
  API_V2_ORDER_GET_ORDER_LIST_PATH,
  GetOrderListRequestParameters,
  GetOrderListResponse,
} from "@shopee-sdk/core";
import { rest } from "msw";

import { mockURL } from "./utils";
import { faker } from "@faker-js/faker";

export function createGetOrderListResponse(
  args?: Partial<GetOrderListResponse>
) {
  const orders = Array.from({
    length: faker.datatype.number({ min: 1, max: 10 }),
  }).map(() => ({
    orderSn: faker.datatype.uuid(),
  }));

  return {
    error: args?.error ?? undefined,
    message: args?.message ?? undefined,
    response: {
      more: (+faker.random.numeric()) % 2 === 0,
      nextCursor: orders.length > 1 ? orders.length.toString() : '',
      orderList: orders,
    },
    requestId: faker.datatype.uuid(),
  } satisfies GetOrderListResponse;
}

export const getOrderListMockHandler = rest.get<
  {},
  Record<keyof GetOrderListRequestParameters, string[]>
>(mockURL(API_V2_ORDER_GET_ORDER_LIST_PATH), (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createGetOrderListResponse()));
});
