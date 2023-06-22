import { z } from "zod";

import { buildMutation } from "./libs";
import {
  API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
} from "./v2-logistic.constant";

export const logisticDownloadShippingDocumentRequestParameterSchema = z.object({
  shippingDocumentType: z.enum(V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES).optional(),
  orderList: z
    .array(
      z.object({
        orderSn: z.string(),
        packageNumber: z.string().optional().nullable(),
      })
    )
    .max(50),
});

export const logisticDownloadShippingDocumentResponseSchema = z.object({
  data: z.string(),
});

export const downloadShippingDocument = buildMutation({
  path: API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  requestParameterSchema:
    logisticDownloadShippingDocumentRequestParameterSchema,
  responseSchema: logisticDownloadShippingDocumentResponseSchema,
  responseType: "stream",
});
