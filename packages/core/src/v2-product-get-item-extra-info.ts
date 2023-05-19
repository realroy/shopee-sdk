import { z } from "zod";

import { buildQuery } from "./libs";
import { API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH } from "./v2-product.constant";

export const getItemExtraInfoRequestParametersSchema = z.object({
  item_id_list: z.string(),
});

export const getItemExtraInfoResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string().optional(),
  request_id: z.string(),
  response: z
    .object({
      item_list: z
        .array(
          z.object({
            item_id: z.number(),
            sale: z.number(),
            views: z.number(),
            likes: z.number(),
            rating_star: z.number(),
            comment_count: z.number(),
          })
        )
        .optional(),
    })
    .optional(),
});

export const getItemExtraInfo = buildQuery({
  path: API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH,
  requestParameterSchema: getItemExtraInfoRequestParametersSchema,
  responseSchema: getItemExtraInfoResponseSchema,
});
