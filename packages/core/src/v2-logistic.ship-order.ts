import { z } from "zod";

import { buildQuery } from "./libs";
import { API_V2_LOGISTIC_GET_SHIPPING_PARAMETER } from "./v2-logistic.constant";

export const logisticGetShippingParameterRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.number().optional(),
});

export const logisticGetShippingParameterResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z
    .object({
      request_id: z.string(),
      error: z.string(),
      message: z.string(),
      response: z.object({
        infoNeeded: z.object({
          dropoff: z.array(z.string()),
          pickup: z.array(z.string()),
          nonIntegrated: z.array(z.string()),
        }),
        dropoff: z.object({
          branch_list: z.array(
            z.object({
              branch_id: z.number(),
              region: z.string(),
              state: z.string(),
              city: z.string(),
              address: z.string(),
              zipcode: z.string(),
              district: z.string(),
              town: z.string(),
            })
          ),
          slugList: z.array(
            z.object({
              slug: z.string(),
              slug_name: z.string(),
            })
          ),
        }),
        pickup: z.object({
          address_list: z.array(
            z.object({
              address_id: z.number(),
              region: z.string(),
              state: z.string(),
              city: z.string(),
              district: z.string(),
              town: z.string(),
              address: z.string(),
              zipcode: z.string(),
              address_flag: z.array(z.string()),
            })
          ),
          time_slot_list: z.array(
            z.object({
              date: z.number(),
              time_text: z.string(),
              pickup_time_id: z.string(),
            })
          ),
        }),
      }),
    })
    .optional(),
  request_id: z.string(),
});

export const getShippingParameter = buildQuery({
  path: API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  requestParameterSchema: logisticGetShippingParameterRequestParameterSchema,
  responseSchema: logisticGetShippingParameterResponseSchema,
  toCamelCase: true,
});
