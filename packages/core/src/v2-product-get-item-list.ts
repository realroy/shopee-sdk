import { z } from "zod";

import { buildQuery } from "./libs/build-query.js";
import {
  API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  ITEM_STATUS,
} from "./v2-product.constant.js";
import { toTimestamp } from "./utils/to-timestamp.js";

export const getItemListRequestParametersSchema = z.object({
  offset: z.number().int().min(0).optional(),
  pageSize: z.number().int().positive().max(100).optional(),
  updateTimeFrom: z.date().optional(),
  updateTimeTo: z.date().optional(),
  itemStatus: z.array(z.enum(ITEM_STATUS)),
});

export const getItemListResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().nullable().optional(),
  warning: z.string().nullable().optional(),
  requestId: z.string(),
  response: z
    .object({
      hasNextPage: z.boolean().optional(),
      item: z
        .array(
          z.object({
            itemId: z.number().int(),
            itemStatus: z.enum(ITEM_STATUS),
            updateTime: z.number().int().optional(),
          })
        )
        .optional(),
      next: z.string().optional(),
      totalCount: z.number().int().optional(),
      nextOffset: z.number().int().optional(),
    })
    .optional(),
});

export const getItemList = buildQuery({
  path: API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  requestParameterSchema: getItemListRequestParametersSchema,
  transformRequestParameterSchema: getItemListRequestParametersSchema.extend({
    updateTimeFrom: z.string(),
    updateTimeTo: z.string(),
  }),
  transformRequestParameter(data) {
    return {
      ...data,
      updateTimeFrom: toTimestamp(
        data.updateTimeFrom ?? new Date("01/01/2022")
      ),
      updateTimeTo: toTimestamp(data.updateTimeTo ?? new Date()),
    };
  },
  responseSchema: getItemListResponseSchema,
});
