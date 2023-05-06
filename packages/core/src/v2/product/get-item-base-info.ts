import { z } from "zod";

import { buildApi } from "@/libs";
import { API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH } from "@/constants";

export const getItemBaseInfoRequestParametersSchema = z.object({
  item_id_list: z.string(),
  need_tax_info: z.coerce.boolean().optional(),
  need_complaint_policy: z.coerce.boolean().optional(),
});

const attributeValueSchema = z.object({
  value_id: z.number(),
  original_value_name: z.string(),
  value_unit: z.string(),
});

const attributeSchema = z.object({
  attribute_id: z.number(),
  original_attribute_name: z.string(),
  is_mandatory: z.boolean(),
  attribute_value_list: z.array(attributeValueSchema),
});

const priceInfoSchema = z.object({
  currency: z.string(),
  original_price: z.number(),
  current_price: z.number(),
});

const sellerStockSchema = z.object({
  location_id: z.string(),
  stock: z.number(),
});

const logisticInfoSchema = z.object({
  logistic_id: z.number(),
  logistic_name: z.string(),
  enabled: z.boolean(),
  shipping_fee: z.number().optional(),
  is_free: z.boolean(),
  estimated_shipping_fee: z.number().optional(),
});

const fieldSchema = z.object({
  field_type: z.string(),
  text: z.string().optional(),
  image_info: z
    .object({
      image_id: z.string(),
      image_url: z.string(),
    })
    .optional(),
});

const getItemBaseInfoItemSchema = z.object({
  item_id: z.number(),
  category_id: z.number(),
  item_name: z.string(),
  item_sku: z.string(),
  create_time: z.number(),
  update_time: z.number(),
  attribute_list: z.array(attributeSchema).optional(),
  price_info: z.array(priceInfoSchema).optional(),
  stock_info_v2: z
    .object({
      summary_info: z.object({
        total_reserved_stock: z.number(),
        total_available_stock: z.number(),
      }),
      seller_stock: z.array(sellerStockSchema).optional(),
    })
    .optional(),
  image: z.object({
    image_url_list: z.array(z.string()),
    image_id_list: z.array(z.string()),
  }),
  weight: z.string(),
  dimension: z.object({
    package_length: z.number(),
    package_width: z.number(),
    package_height: z.number(),
  }),
  logistic_info: z.array(logisticInfoSchema),
  pre_order: z.object({
    is_pre_order: z.boolean(),
    days_to_ship: z.number(),
  }),
  condition: z.string(),
  size_chart: z.string(),
  item_status: z.string(),
  has_model: z.boolean(),
  promotion_id: z.number().optional(),
  brand: z.object({
    brand_id: z.number(),
    original_brand_name: z.string(),
  }),
  tax_info: z
    .object({
      ncm: z.number(),
      same_state_cfop: z.number(),
      diff_state_cfop: z.number(),
      csosn: z.number(),
      origin: z.number(),
    })
    .optional(),
  description_type: z.string(),
  description_info: z.object({
    extended_description: z.object({
      field_list: z.array(fieldSchema),
    }),
  }),
});

export const getItemBaseInfoResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string(),
  request_id: z.string(),
  response: z.object({
    item_list: z.array(getItemBaseInfoItemSchema).optional(),
  }),
});

export type GetItemBaseInfoResponse = z.infer<
  typeof getItemBaseInfoResponseSchema
>;

export type GetItemBaseInfoItem = z.infer<typeof getItemBaseInfoItemSchema>;

export type GetItemBaseInfoRequestParameters = z.infer<
  typeof getItemBaseInfoRequestParametersSchema
>;

export const getItemBaseInfo = buildApi({
  method: "GET",
  path: API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  requestParameterSchema: getItemBaseInfoRequestParametersSchema,
  responseSchema: getItemBaseInfoResponseSchema,
  transformRequestParameter(data) {
    data.need_tax_info = Boolean(data.need_tax_info);
    data.need_complaint_policy = Boolean(data.need_complaint_policy);

    return data;
  },
});

export default getItemBaseInfo;