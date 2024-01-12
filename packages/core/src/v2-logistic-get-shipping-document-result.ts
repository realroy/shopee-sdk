import { z } from "zod";

import { buildMutation } from "./libs/index.js";
import {
  API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
  V2_LOGISTIC_SHIPPING_STATUSES,
} from "./v2-logistic.constant.js";

export const logisticGetShippingDocumentResultRequestParameterSchema = z.object(
  {
    orderList: z
      .array(
        z.object({
          orderSn: z.string(),
          packageNumber: z.string().optional(),
          shippingDocumentType: z
            .enum(V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES)
            .optional(),
        })
      )
      .max(50),
  }
);

export const logisticGetShippingDocumentResultResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  warning: z
    .object({
      orderSn: z.string(),
      packageNumber: z.number().optional(),
    })
    .optional(),
  response: z
    .object({
      orderSn: z.string(),
      packageNumber: z.string(),
      status: z.enum(V2_LOGISTIC_SHIPPING_STATUSES),
      failError: z.string(),
      failMessage: z.string(),
    })
    .optional(),
  requestId: z.string(),
});

export const getShippingDocumentResult = buildMutation({
  path: API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_RESULT,
  requestParameterSchema:
    logisticGetShippingDocumentResultRequestParameterSchema,
  responseSchema: logisticGetShippingDocumentResultResponseSchema,
});
