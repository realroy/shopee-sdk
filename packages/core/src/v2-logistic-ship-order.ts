import { z } from "zod";

import { buildMutation } from "./libs";
import { API_V2_LOGISTIC_SHIP_ORDER } from "./v2-logistic.constant";

export const logisticShipOrderRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.string().optional(),
  pickup: z
    .object({
      addressId: z.number().optional(),
      pickupTimeId: z.string().optional(),
      trackingNumber: z.string().optional(),
    })
    .optional(),
  dropoff: z
    .object({
      branchId: z.number().optional(),
      senderRealName: z.string().optional(),
      trackingNumber: z.string().optional(),
      slug: z.string().optional(),
    })
    .optional(),
  nonIntegrated: z
    .object({
      trackingNumber: z.string().optional(),
    })
    .optional(),
});

export const logisticShipOrderResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  requestId: z.string(),
});

export const shipOrder = buildMutation({
  path: API_V2_LOGISTIC_SHIP_ORDER,
  requestParameterSchema: logisticShipOrderRequestParameterSchema,
  responseSchema: logisticShipOrderResponseSchema
});
