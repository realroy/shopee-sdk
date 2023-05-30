import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  ORDER_RESPONSE_OPTIONAL_FIELDS,
} from "./v2-order.constant";

export const getOrderDetailRequestParametersSchema = z.object({
  order_sn_list: z.array(z.string()),
  response_optional_fields: z.array(z.enum(ORDER_RESPONSE_OPTIONAL_FIELDS)).optional(),
});

export const getOrderDetailResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({
    order_list: z.array(
      z.object({
        checkout_shipping_carrier: z.null(),
        reverse_shipping_fee: z.null(),
        actual_shipping_fee: z.null(),
        actual_shipping_fee_confirmed: z.boolean(),
        buyer_cancel_reason: z.string(),
        buyer_cpf_id: z.null(),
        buyer_user_id: z.number(),
        buyer_username: z.string(),
        cancel_by: z.string(),
        cancel_reason: z.string(),
        cod: z.boolean(),
        create_time: z.number(),
        currency: z.string(),
        days_to_ship: z.number(),
        dropshipper: z.string(),
        dropshipper_phone: z.string(),
        estimated_shipping_fee: z.number(),
        fulfillment_flag: z.string(),
        goods_to_declare: z.boolean(),
        invoice_data: z.null(),
        item_list: z.array(
          z.object({
            item_id: z.number(),
            item_name: z.string(),
            item_sku: z.string(),
            model_id: z.number(),
            model_name: z.string(),
            model_sku: z.string(),
            model_quantity_purchased: z.number(),
            model_original_price: z.number(),
            model_discounted_price: z.number(),
            wholesale: z.boolean(),
            weight: z.number(),
            add_on_deal: z.boolean(),
            main_item: z.boolean(),
            add_on_deal_id: z.number(),
            promotion_type: z.string(),
            promotion_id: z.number(),
            order_item_id: z.number(),
            promotion_group_id: z.number(),
            image_info: z.object({
              image_url: z.string(),
            }),
            product_location_id: z.array(z.string()),
          })
        ),
        message_to_seller: z.string(),
        note: z.string(),
        note_update_time: z.number(),
        order_sn: z.string(),
        order_status: z.string(),
        package_list: z.array(
          z.object({
            package_number: z.string(),
            logistics_status: z.string(),
            shipping_carrier: z.string(),
            item_list: z.array(
              z.object({
                item_id: z.number(),
                model_id: z.number(),
                model_quantity: z.number(),
              })
            ),
          })
        ),
        pay_time: z.number(),
        payment_method: z.string(),
        pickup_done_time: z.number(),
        recipient_address: z.object({
          name: z.string(),
          phone: z.string(),
          town: z.string(),
          district: z.string(),
          city: z.string(),
          state: z.string(),
          region: z.string(),
          zipcode: z.string(),
          full_address: z.string(),
        }),
        region: z.string(),
        ship_by_date: z.number(),
        shipping_carrier: z.string(),
        split_up: z.boolean(),
        total_amount: z.number(),
        update_time: z.number(),
      })
    ),
  }),
  request_id: z.string(),
});

export const getOrderDetail = buildQuery({
  path: API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  requestParameterSchema: getOrderDetailRequestParametersSchema,
  responseSchema: getOrderDetailResponseSchema,
});
