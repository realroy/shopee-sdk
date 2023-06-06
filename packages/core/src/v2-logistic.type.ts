import { z } from "zod";

import {
  logisticGetShippingParameterRequestParameterSchema,
  logisticGetShippingParameterResponseSchema,
} from "./v2-logistic.get-shipping-parameter";
import {
  logisticShipOrderRequestParameterSchema,
  logisticShipOrderResponseSchema,
} from "./v2-logistic.ship-order";
import {
  logisticUpdateShipOrderRequestParameterSchema,
  logisticUpdateShipOrderResponseSchema,
} from "./v2-logistic.update-ship-order";
import { logisticGetTrackingNumberRequestParameterSchema, logisticGetTrackingNumberResponseSchema } from "./v2-logistic-get-tracking-number";
import { V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS } from "./v2-logistic.constant";
import { logisticGetShippingDocumentParameterRequestParameterSchema, logisticGetShippingDocumentParameterResponseSchema } from "./v2-logistic-get-shipping-document-parameter";

export type LogisticGetShippingParameterRequestParameter = z.infer<
  typeof logisticGetShippingParameterRequestParameterSchema
>;
export type LogisticGetShippingParameterResponse = z.infer<
  typeof logisticGetShippingParameterResponseSchema
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

export type LogisticGetTrackingNumberRequestParameter = z.infer<typeof logisticGetTrackingNumberRequestParameterSchema>
export type LogisticGetTrackingNumberResponse = z.infer<typeof logisticGetTrackingNumberResponseSchema>
export type LogisticGetTrackingNumberResponseOptionalFields =  keyof typeof V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS

export type LogisticGetShippingDocumentParameterRequestParameter = z.infer<typeof logisticGetShippingDocumentParameterRequestParameterSchema>
export type LogisticGetShippingDocumentParameterResponse= z.infer<typeof logisticGetShippingDocumentParameterResponseSchema>