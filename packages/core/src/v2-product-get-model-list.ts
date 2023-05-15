import { z } from "zod";

import { buildApi } from "./libs";
import { API_V2_PRODUCT_GET_MODEL_LIST_PATH } from "./v2-product.constant";

export const getModelListRequestParametersSchema = z.object({
  item_id_list: z.string(),
});

export const getModelListResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string(),
  request_id: z.string(),
  response: z.object({
    tier_variation: z.array(
      z.object({
        name: z.string(),
        option_list: z.array(
          z.object({
            option: z.string(),
          })
        ),
      })
    ),
    model: z.array(
      z.object({
        model_id: z.number(),
        model_status: z.string(),
        promotion_id: z.number(),
        tier_index: z.array(z.number()),
        price_info: z.array(
          z.object({
            current_price: z.number(),
            original_price: z.number(),
            inflated_price_of_current_price: z.number(),
            inflated_price_of_original_price: z.number(),
          })
        ),
        model_sku: z.string(),
        pre_order: z.object({
          is_pre_order: z.boolean(),
          days_to_ship: z.number(),
        }),
        stock_info_v2: z.object({
          summary_info: z.object({
            total_reserved_stock: z.number(),
            total_available_stock: z.number(),
          }),
          seller_stock: z.array(
            z.object({
              location_id: z.string(),
              stock: z.number(),
            })
          ),
        }),
      })
    ),
  }),
});

export const getModelList = buildApi({
  method: "GET",
  path: API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  requestParameterSchema: getModelListRequestParametersSchema,
  responseSchema: getModelListResponseSchema,
});

