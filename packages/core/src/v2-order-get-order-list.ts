import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_ORDER_GET_ORDER_LIST_PATH,
  ORDER_STATUS,
} from "./v2-order.constant";

export const getOrderListRequestParametersSchema = z.object({
  time_range_field: z.enum(["create_time", "update_time"]),
  time_from: z.date(),
  time_to: z.date(),
  page_size: z.number().min(1).max(100),
  cursor: z.string().optional(),
  order_status: z.enum(ORDER_STATUS).optional(),
  response_optional_fields: z.enum(['order_status']).optional().default('order_status'),
});

export const getOrderListResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({
    more: z.boolean(),
    next_cursor: z.string(),
    order_list: z.array(
      z.object({
        order_sn: z.string(),
      })
    ),
  }),
  request_id: z.string(),
});

export const getOrderList = buildQuery({
  path: API_V2_ORDER_GET_ORDER_LIST_PATH,
  requestParameterSchema: getOrderListRequestParametersSchema,
  responseSchema: getOrderListResponseSchema,
});
