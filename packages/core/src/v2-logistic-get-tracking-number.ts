import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP,
} from "./v2-logistic.constant";

const RESPONSE_FIELDS =
  V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS_MAP;

export const logisticGetTrackingNumberRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.number().optional(),
  responseOptionalFields: z
    .enum([
      RESPONSE_FIELDS.first_mile_tracking_number,
      RESPONSE_FIELDS.last_mile_tracking_number,
      RESPONSE_FIELDS.plp_number,

      `${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.last_mile_tracking_number}`,
      `${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.plp_number}`,

      `${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.first_mile_tracking_number}`,

      `${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.plp_number}`,

      `${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.first_mile_tracking_number}`,

      `${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.last_mile_tracking_number}`,

      `${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.plp_number}`,

      `${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.last_mile_tracking_number}`,

      `${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.plp_number}`,

      `${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.first_mile_tracking_number}`,

      `${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.first_mile_tracking_number},${RESPONSE_FIELDS.last_mile_tracking_number}`,

      `${RESPONSE_FIELDS.plp_number},${RESPONSE_FIELDS.last_mile_tracking_number},${RESPONSE_FIELDS.first_mile_tracking_number}`,
    ])

    .optional(),
});

export const logisticGetTrackingNumberResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({}).optional(),
  requestId: z.string(),
});

export const getTrackingNumber = buildQuery({
  path: API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  requestParameterSchema: logisticGetTrackingNumberRequestParameterSchema,
  responseSchema: logisticGetTrackingNumberResponseSchema,
  toCamelCase: true,
});
