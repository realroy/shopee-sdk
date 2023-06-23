import { z } from "zod";

import { buildQuery } from "./libs";
import { API_V2_LOGISTIC_GET_SHIPPING_PARAMETER } from "./v2-logistic.constant";

export const logisticGetShippingParameterRequestParameterSchema = z.object({
  orderSn: z.string(),
  packageNumber: z.string().optional(),
});

export const logisticGetShippingParameterResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z
    .object({
      infoNeeded: z.object({
        dropoff: z.array(z.string()),
        pickup: z.array(z.string()),
        nonIntegrated: z.array(z.string()).nullable().optional(),
      }),
      dropoff: z.object({
        branchList: z
          .array(
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
          )
          .nullable()
          .optional(),
        slugList: z
          .array(
            z.object({
              slug: z.string(),
              slugName: z.string(),
            })
          )
          .nullable(),
      }),
      pickup: z.object({
        addressList: z.array(
          z.object({
            addressId: z.number(),
            region: z.string(),
            state: z.string(),
            city: z.string(),
            district: z.string(),
            town: z.string(),
            address: z.string(),
            zipcode: z.string(),
            addressFlag: z.array(z.string()),
            timeSlotList: z
              .array(
                z.object({
                  date: z.number(),
                  timeText: z.string(),
                  pickupTimeId: z.string(),
                })
              )
              .optional()
              .nullable(),
          })
        ),
      }),
    })
    .optional(),
  requestId: z.string(),
});

export const getShippingParameter = buildQuery({
  path: API_V2_LOGISTIC_GET_SHIPPING_PARAMETER,
  requestParameterSchema: logisticGetShippingParameterRequestParameterSchema,
  responseSchema: logisticGetShippingParameterResponseSchema,
});
