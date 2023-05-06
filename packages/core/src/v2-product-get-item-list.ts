import { z } from "zod";

import { buildApi } from "./libs";
import { API_V2_PRODUCT_GET_ITEM_LIST_PATH, ITEM_STATUS } from "./v2-product.constant";


export const getItemListRequestParametersSchema = z.object({
  offset: z.number().int().min(0).optional(),
  page_size: z.number().int().positive().max(100).optional(),
  update_time_from: z.date().optional(),
  update_time_to: z.date().optional(),
  item_status: z.array(z.enum(ITEM_STATUS)),
});

export const getItemListResponseSchema = z.object({
  error: z.string(),
  message: z.string().nullable().optional(),
  warning: z.string().nullable().optional(),
  request_id: z.string(),
  response: z
    .object({
      item: z
        .array(
          z.object({
            item_id: z.number().int(),
            item_status: z.enum(ITEM_STATUS),
            update_time: z.number().int(),
          })
        )
        .optional(),
    })
    .optional(),
  total_count: z.number().int().optional(),
  has_next_page: z.boolean().optional(),
  next_offset: z.number().int().optional(),
});



export const getItemList = buildApi({
  method: "GET",
  path: API_V2_PRODUCT_GET_ITEM_LIST_PATH,
  requestParameterSchema: getItemListRequestParametersSchema,
  transformRequestParameter(data) {
    data.update_time_from = data.update_time_from ?? new Date("01/01/2022");
    data.update_time_to = data.update_time_to ?? new Date();

    return data;
  },
  responseSchema: getItemListResponseSchema,
});
