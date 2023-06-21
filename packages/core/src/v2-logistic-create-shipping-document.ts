import { z } from "zod";

import { buildMutation } from "./libs";
import {
  API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
} from "./v2-logistic.constant";

export const logisticCreateShippingDocumentRequestParameterSchema = z.object({
  orderList: z
    .array(
      z.object({
        orderSn: z.string(),
        packageNumber: z.string().optional(),
        trackingNumber: z.string().optional(),
        shippingDocumentType: z
          .enum(V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES)
          .optional(),
      })
    )
    .min(1)
    .max(50),
});

export const logisticCreateShippingDocumentResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  warning: z
    .object({
      orderSn: z.string(),
      packageNumber: z.string().optional(),
    })
    .optional(),
  response: z
    .object({
      orderSn: z.string().optional(),
      packageNumber: z.string().optional(),
      failError: z.string().optional(),
      failMessage: z.string().optional(),
    })
    .optional(),
  requestId: z.string(),
});

export const createShippingDocument = buildMutation({
  path: API_V2_LOGISTIC_CREATE_SHIPPING_DOCUMENT,
  requestParameterSchema: logisticCreateShippingDocumentRequestParameterSchema,
  responseSchema: logisticCreateShippingDocumentResponseSchema,
});
