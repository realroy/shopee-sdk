import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_ORDER_GET_ORDER_LIST_PATH,
  V2_ORDER_STATUS,
} from "./v2-order.constant";

export const getOrderListRequestParametersSchema = z.object({
  timeRangeField: z.enum(["create_time", "update_time"]),
  timeFrom: z.date(),
  timeTo: z.date(),
  pageSize: z.number().min(1).max(100),
  cursor: z.string().optional(),
  orderStatus: z.enum(V2_ORDER_STATUS).optional(),
  responseOptionalFields: z
    .enum(["order_status"])
    .optional()
    .default("order_status"),
});

export const getOrderListResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z
    .object({
      more: z.boolean(),
      nextCursor: z.string(),
      orderList: z.array(
        z.object({
          orderSn: z.string(),
        })
      ),
    })
    .optional(),
  requestId: z.string(),
});

export const getOrderList = buildQuery({
  path: API_V2_ORDER_GET_ORDER_LIST_PATH,
  requestParameterSchema: getOrderListRequestParametersSchema,
  responseSchema: getOrderListResponseSchema,
});
