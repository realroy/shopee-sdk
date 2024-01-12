import { z } from "zod";

import {
  logisticCreateShippingDocumentResponseSchema,
  logisticCreateShippingDocumentRequestParameterSchema,
} from "./v2-logistic-create-shipping-document.js";
import {
  logisticDownloadShippingDocumentResponseSchema,
  logisticDownloadShippingDocumentRequestParameterSchema,
} from "./v2-logistic-download-shipping-document.js";
import {
  logisticGetShippingDocumentParameterRequestParameterSchema,
  logisticGetShippingDocumentParameterResponseSchema,
} from "./v2-logistic-get-shipping-document-parameter.js";
import {
  logisticGetShippingDocumentResultResponseSchema,
  logisticGetShippingDocumentResultRequestParameterSchema,
} from "./v2-logistic-get-shipping-document-result.js";
import {
  logisticGetShippingParameterRequestParameterSchema,
  logisticGetShippingParameterResponseSchema,
} from "./v2-logistic-get-shipping-parameter.js";
import {
  logisticGetTrackingNumberRequestParameterSchema,
  logisticGetTrackingNumberResponseSchema,
} from "./v2-logistic-get-tracking-number.js";
import {
  logisticShipOrderRequestParameterSchema,
  logisticShipOrderResponseSchema,
} from "./v2-logistic-ship-order.js";
import {
  logisticUpdateShipOrderRequestParameterSchema,
  logisticUpdateShipOrderResponseSchema,
} from "./v2-logistic-update-ship-order.js";

import { V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS } from "./v2-logistic.constant.js";

export type LogisticCreateShippingDocumentResponseSchema = z.infer<
  typeof logisticCreateShippingDocumentResponseSchema
>;
export type LogisticCreateShippingDocumentRequestParameterSchema = z.infer<
  typeof logisticCreateShippingDocumentRequestParameterSchema
>;

export type LogisticDownloadShippingDocumentResponseSchema = z.infer<
  typeof logisticDownloadShippingDocumentResponseSchema
>;
export type LogisticDownloadShippingDocumentRequestParameterSchema = z.infer<
  typeof logisticDownloadShippingDocumentRequestParameterSchema
>;

export type LogisticGetShippingParameterRequestParameter = z.infer<
  typeof logisticGetShippingParameterRequestParameterSchema
>;
export type LogisticGetShippingParameterResponse = z.infer<
  typeof logisticGetShippingParameterResponseSchema
>;

export type LogisticGetShippingDocumentResultResponseSchema = z.infer<
  typeof logisticGetShippingDocumentResultResponseSchema
>;
export type LogisticGetShippingDocumentResultRequestParameterSchema = z.infer<
  typeof logisticGetShippingDocumentResultRequestParameterSchema
>;

export type LogisticShipOrderRequestParameter = z.infer<
  typeof logisticShipOrderRequestParameterSchema
>;
export type LogisticShipOrderResponse = z.infer<
  typeof logisticShipOrderResponseSchema
>;

export type LogisticUpdateShipOrderRequestParameter = z.infer<
  typeof logisticUpdateShipOrderRequestParameterSchema
>;
export type LogisticUpdateShipOrderResponse = z.infer<
  typeof logisticUpdateShipOrderResponseSchema
>;

export type LogisticGetTrackingNumberRequestParameter = z.infer<
  typeof logisticGetTrackingNumberRequestParameterSchema
>;
export type LogisticGetTrackingNumberResponse = z.infer<
  typeof logisticGetTrackingNumberResponseSchema
>;
export type LogisticGetTrackingNumberResponseOptionalFields =
  keyof typeof V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS;

export type LogisticGetShippingDocumentParameterRequestParameter = z.infer<
  typeof logisticGetShippingDocumentParameterRequestParameterSchema
>;
export type LogisticGetShippingDocumentParameterResponse = z.infer<
  typeof logisticGetShippingDocumentParameterResponseSchema
>;
