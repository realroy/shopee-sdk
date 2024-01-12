import { z } from "zod";

import { buildQuery } from "./libs/index.js";
import {
  API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
} from "./v2-logistic.constant.js";

export const logisticGetTrackingNumberRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.string().optional(),
  responseOptionalFields: z
    .array(z.enum(V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS))
    .optional(),
});

export const logisticGetTrackingNumberResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z
    .object({
      firstMileTrackingNumber: z.string().nullable().optional(),
      hint: z.string().optional(),
      lastMileTrackingNumber: z.string().nullable().optional(),
      plpNumber: z.string().nullable().optional(),
      trackingNumber: z.string().nullable(),
    })
    .optional(),
  requestId: z.string(),
});

export const getTrackingNumber = buildQuery({
  path: API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  requestParameterSchema: logisticGetTrackingNumberRequestParameterSchema,
  responseSchema: logisticGetTrackingNumberResponseSchema,
  transformRequestParameterSchema:
    logisticGetTrackingNumberRequestParameterSchema.extend({
      responseOptionalFields: z.string().optional(),
    }),
  transformRequestParameter(data) {
    return {
      ...data,
      responseOptionalFields: data.responseOptionalFields?.join(","),
    };
  },
});
