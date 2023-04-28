import { z } from "zod";

import { buildApi } from "@/libs";

export const API_V2_PRODUCT_GET_ITEM_EXTRA_INFO =
  "/api/v2/product/get_item_extra_info";

export const getItemExtraInfoRequestParametersSchema = z.object({
  item_id_list: z.string(),
});

const itemSchema = z.object({
  item_id: z.number(),
  sale: z.number(),
  views: z.number(),
  likes: z.number(),
  rating_star: z.number(),
  comment_count: z.number(),
});

export const getItemExtraInfoResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string().optional(),
  request_id: z.string(),
  response: z.object({
    item_list: z.array(itemSchema).optional(),
  }).optional(),
});

export type GetItemExtraInfoResponse = z.infer<
  typeof getItemExtraInfoResponseSchema
>;

export type GetItemExtraInfoRequestParameters = z.infer<
  typeof getItemExtraInfoRequestParametersSchema
>;

export const getItemExtraInfo = buildApi({
  method: "GET",
  path: API_V2_PRODUCT_GET_ITEM_EXTRA_INFO,
  requestParameterSchema: getItemExtraInfoRequestParametersSchema,
  responseSchema: getItemExtraInfoResponseSchema,
});

export default getItemExtraInfo;
