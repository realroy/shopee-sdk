import { z } from "zod";

import { buildApi } from "@/libs";

export const API_V2_PRODUCT_GET_ITEM_LIST = "/api/v2/product/get_item_list";

export const ITEM_STATUS = ["NORMAL", "DELETED", "UNLIST", "BANNED"] as const;

export const getItemListRequestParametersSchema = z.object({
  offset: z.number().int().min(0).optional(),
  page_size: z.number().int().positive().max(100).optional(),
  update_time_from: z.date().optional(),
  update_time_to: z.date().optional(),
  item_status: z.array(z.enum(ITEM_STATUS))
});

export const itemSchema = z.object({
  item_id: z.number().int(),
  item_status: z.enum(ITEM_STATUS),
  update_time: z.number().int(),
});

export const getItemListResponseSchema = z.object({
  error: z.string(),
  message: z.string().nullable().optional(),
  warning: z.string().nullable().optional(),
  request_id: z.string(),
  response: z
    .object({
      item: z.array(itemSchema.optional()).optional(),
    })
    .optional(),
  total_count: z.number().int().optional(),
  has_next_page: z.boolean().optional(),
  next_offset: z.number().int().optional(),
});

export type Item = z.infer<typeof itemSchema>;

export type GetItemListResponse = z.infer<typeof getItemListResponseSchema>;

export type GetItemListRequestParameters = z.infer<
  typeof getItemListRequestParametersSchema
>;

// export async function getItemList(
//   requestParameters: GetItemListRequestParameters
// ) {
//   const parseRequestParameters = await getItemListRequestParametersSchema
//     .transform(({ update_time_from, update_time_to, item_status, ...data }) => {
//       return {
//         ...data,
//         update_time_from: update_time_from ?? new Date("01/01/2022"),
//         update_time_to: update_time_to ?? new Date(),
//         item_status: item_status ?? ItemStatus,
//       };
//     })
//     .safeParseAsync(requestParameters);

//   if (!parseRequestParameters.success) {
//     throw new Error(parseRequestParameters.error.message);
//   }

//   const parsedRequestParameters = parseRequestParameters.data;
//   const context = ShopeeContext.getInstance().value;

//   const signedURL = signUrl({
//     ...context,
//     path: API_V2_PRODUCT_GET_ITEM_LIST,
//     params: parsedRequestParameters,
//   });

//   const { data } = await HttpClient.getInstance().get(signedURL);

//   const parseData = await getItemListResponseSchema.safeParseAsync(data);

//   if (!parseData.success) {
//     throw new Error(parseData.error.message);
//   }

//   return parseData.data;
// }

export const getItemList = buildApi({
  method: "GET",
  path: API_V2_PRODUCT_GET_ITEM_LIST,
  requestParameterSchema: getItemListRequestParametersSchema,
  transformRequestParameter(data) {
    data.update_time_from = data.update_time_from ?? new Date("01/01/2022");
    data.update_time_to = data.update_time_to ?? new Date();
    
    return data
  },
  responseSchema: getItemListResponseSchema,
})

export default getItemList;
