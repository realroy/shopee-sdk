import { z } from "zod";
import _snakeCase from "lodash.snakecase";
import { Readable } from "stream";
import nodeFetch from "node-fetch";

import { signURL, transformObjectKeys } from "./utils/index.js";
import { ShopeeContext } from "./libs/index.js";

import {
  API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
  V2_LOGISTIC_SHIPPING_DOCUMENT_TYPES,
} from "./v2-logistic.constant.js";

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

export async function downloadShippingDocument(
  requestParameter: z.infer<
    typeof logisticDownloadShippingDocumentRequestParameterSchema
  >
) {
  const parseRequestParameters =
    await logisticDownloadShippingDocumentRequestParameterSchema.safeParseAsync(
      requestParameter
    );

  if (!parseRequestParameters.success) {
    throw new Error(
      `parse request parameters error: ${parseRequestParameters.error.message}`
    );
  }

  const contextInstance = ShopeeContext.getInstance();
  const context = contextInstance.value;

  const signedURL = await signURL({
    ...context,
    path: API_V2_LOGISTIC_DOWNLOAD_SHIPPING_DOCUMENT,
    params: {},
  });

  const body = transformObjectKeys(parseRequestParameters.data, (key) =>
    _snakeCase(key.toString())
  );

  const res = await nodeFetch(signedURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.body === null) {
    return res.body;
  }

  return Readable.from(res.body);
}
