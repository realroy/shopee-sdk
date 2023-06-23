import { z } from "zod";

import { buildMutation } from "./libs";
import { API_V2_LOGISTIC_UPDATE_SHIP_ORDER } from "./v2-logistic.constant";

export const logisticUpdateShipOrderRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.string().optional().nullable().default(null),
  pickup: z.object({
    addressId: z.number(),
    pickupTimeId: z.string(),
  }),
});

export const logisticUpdateShipOrderResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  requestId: z.string(),
});

export const updateShipOrder = buildMutation({
  path: API_V2_LOGISTIC_UPDATE_SHIP_ORDER,
  requestParameterSchema: logisticUpdateShipOrderRequestParameterSchema,
  responseSchema: logisticUpdateShipOrderResponseSchema,
});
