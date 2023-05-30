import { z } from "zod";

import {
  getOrderListRequestParametersSchema,
  getOrderListResponseSchema,
} from "./v2-order-get-order-list";
import {
  getOrderDetailRequestParametersSchema,
  getOrderDetailResponseSchema,
} from "./v2-order-get-order-detail";

export type GetOrderListRequestParametersSchema = z.infer<
  typeof getOrderListRequestParametersSchema
>;
export type GetOrderListResponseSchema = z.infer<
  typeof getOrderListResponseSchema
>;

export type GetOrderDetailRequestParametersSchema = z.infer<
  typeof getOrderDetailRequestParametersSchema
>;
export type GetOrderDetailResponseSchema = z.infer<
  typeof getOrderDetailResponseSchema
>;
