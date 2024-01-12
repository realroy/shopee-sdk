import { z } from "zod";

import { buildMutation } from "./libs/index.js";
import {
  API_V2_ORDER_CANCEL_ORDER_PATH,
  SELLER_CANCEL_REASONS,
} from "./v2-order.constant.js";

export const cancelOrderRequestParametersSchema = z.object({
  orderSn: z.string(),
  cancelReason: z.literal(SELLER_CANCEL_REASONS[0]),
  itemList: z.array(
    z.object({
      itemId: z.number(),
      modelId: z.number(),
    })
  ),
});

export const cancelOrderResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({
    updateTime: z.number(),
  }),
  requestId: z.string(),
});

export const cancelOrder = buildMutation({
  path: API_V2_ORDER_CANCEL_ORDER_PATH,
  requestParameterSchema: cancelOrderRequestParametersSchema,
  responseSchema: cancelOrderResponseSchema,
});
