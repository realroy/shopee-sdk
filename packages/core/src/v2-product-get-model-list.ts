import { z } from "zod";

import { buildQuery } from "./libs";
import { API_V2_PRODUCT_GET_MODEL_LIST_PATH } from "./v2-product.constant";

export const getModelListRequestParametersSchema = z.object({
  item_id: z.string(),
});

export const getModelListResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string(),
  requestId: z.string(), // changed from request_id
  response: z.object({
    tierVariation: z.array(
      // changed from tier_variation
      z.object({
        name: z.string(),
        optionList: z.array(
          // changed from option_list
          z.object({
            option: z.string(),
          })
        ),
      })
    ),
    model: z.array(
      z.object({
        modelId: z.number(), // changed from model_id
        modelStatus: z.string(), // changed from model_status
        promotionId: z.number(), // changed from promotion_id
        tierIndex: z.array(z.number()), // changed from tier_index
        priceInfo: z.array(
          // changed from price_info
          z.object({
            currentPrice: z.number(), // changed from current_price
            originalPrice: z.number(), // changed from original_price
            inflatedPriceOfCurrentPrice: z.number(), // changed from inflated_price_of_current_price
            inflatedPriceOfOriginalPrice: z.number(), // changed from inflated_price_of_original_price
          })
        ),
        modelSku: z.string(), // changed from model_sku
        preOrder: z.object({
          // changed from pre_order
          isPreOrder: z.boolean(), // changed from is_pre_order
          daysToShip: z.number(), // changed from days_to_ship
        }),
        stockInfoV2: z.object({
          // changed from stock_info_v2
          summaryInfo: z.object({
            // changed from summary_info
            totalReservedStock: z.number(), // changed from total_reserved_stock
            totalAvailableStock: z.number(), // changed from total_available_stock
          }),
          sellerStock: z.array(
            // changed from seller_stock
            z.object({
              locationId: z.string(), // changed from location_id
              stock: z.number(),
            })
          ),
        }),
      })
    ),
  }),
});

export const getModelList = buildQuery({
  path: API_V2_PRODUCT_GET_MODEL_LIST_PATH,
  requestParameterSchema: getModelListRequestParametersSchema,
  responseSchema: getModelListResponseSchema,
});
