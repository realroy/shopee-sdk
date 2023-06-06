import { z } from "zod";

import { buildMutation } from "./libs";
import { API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER } from "./v2-logistic.constant";

export const logisticGetShippingDocumentParameterRequestParameterSchema =
  z.object({
    orderList: z
      .array(
        z.object({
          orderSn: z.string(),
          packageNumber: z.number().optional(),
        })
      )
      .max(50),
  });

export const logisticGetShippingDocumentParameterResponseSchema = z.object({
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
      packageNumber: z.number().optional(),
      suggestShippingDocumentType: z.string(),
      selectableShippingDocumentType: z.array(z.string()),
      failError: z.string(),
      failMessage: z.string(),
    })
    .optional(),
  requestId: z.string(),
});

export const getShippingDocumentParameter = buildMutation({
  path: API_V2_LOGISTIC_GET_SHIPPING_DOCUMENT_PARAMETER,
  requestParameterSchema:
    logisticGetShippingDocumentParameterRequestParameterSchema,
  responseSchema: logisticGetShippingDocumentParameterResponseSchema,
});
