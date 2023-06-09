import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_LOGISTIC_GET_TRACKING_NUMBER,
  V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS,
} from "./v2-logistic.constant";

export const logisticGetTrackingNumberRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.number().optional(),
  responseOptionalFields: z
    .array(z.enum(V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS))
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
