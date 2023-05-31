import { z } from "zod";

import {
  getOrderListRequestParametersSchema,
  getOrderListResponseSchema,
} from "./v2-order-get-order-list";
import {
  getOrderDetailRequestParametersSchema,
  getOrderDetailResponseSchema,
} from "./v2-order-get-order-detail";

export type GetOrderListRequestParameters = z.infer<
  typeof getOrderListRequestParametersSchema
>;
export type GetOrderListResponse = z.infer<
  typeof getOrderListResponseSchema
>;

export type GetOrderDetailRequestParameters = z.infer<
  typeof getOrderDetailRequestParametersSchema
>;
export type GetOrderDetailResponse = z.infer<
  typeof getOrderDetailResponseSchema
>;
