import { z } from "zod";

import { buildQuery } from "./libs";
import { API_V2_PRODUCT_GET_ITEM_EXTRA_INFO_PATH } from "./v2-product.constant";

export const getItemExtraInfoRequestParametersSchema = z.object({
  itemIdList: z.string(),
});

export const getItemExtraInfoResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string().optional(),
  requestId: z.string(),
  response: z
    .object({
      itemList: z
        .array(
          z.object({
            itemId: z.number(),
            sale: z.number(),
            views: z.number(),
            likes: z.number(),
            ratingStar: z.number(),
            commentCount: z.number(),
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
