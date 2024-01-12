import { z } from "zod";

import { buildMutation } from "./libs/index.js";
import { API_V2_ORDER_HANDLE_BUYER_CANCELLATION_PATH } from "./v2-order.constant.js";

export const handleBuyerCancellationRequestParametersSchema = z.object({
  orderSn: z.string(),
  operation: z.enum(["ACCEPT", "REJECT"]),
});

export const handleBuyerCancellationResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({
    updateTime: z.number(),
  }),
  requestId: z.string(),
});

export const handleBuyerCancellation = buildMutation({
  path: API_V2_ORDER_HANDLE_BUYER_CANCELLATION_PATH,
  requestParameterSchema: handleBuyerCancellationRequestParametersSchema,
  responseSchema: handleBuyerCancellationResponseSchema,
});
