import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  ORDER_RESPONSE_OPTIONAL_FIELDS,
} from "./v2-order.constant";

export const getOrderDetailRequestParametersSchema = z.object({
  orderSnList: z.array(z.string()),
  responseOptionalFields: z.enum(ORDER_RESPONSE_OPTIONAL_FIELDS).optional(),
});

export const getOrderDetailResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z.object({
    orderList: z.array(
      z.object({
        checkoutShippingCarrier: z.null(),
        reverseShippingFee: z.null(),
        actualShippingFee: z.null(),
        actualShippingFeeConfirmed: z.boolean(),
        buyerCancelReason: z.string(),
        buyerCpfId: z.null(),
        buyerUserId: z.number(),
        buyerUsername: z.string(),
        cancelBy: z.string(),
        cancelReason: z.string(),
        cod: z.boolean(),
        createTime: z.number(),
        currency: z.string(),
        daysToShip: z.number(),
        dropshipper: z.string(),
        dropshipperPhone: z.string(),
        estimatedShipping_fee: z.number(),
        fulfillmentFlag: z.string(),
        goodsToDeclare: z.boolean(),
        invoiceData: z.null(),
        itemList: z.array(
          z.object({
            itemId: z.number(),
            itemName: z.string(),
            itemSku: z.string(),
            modelId: z.number(),
            modelName: z.string(),
            modelSku: z.string(),
            modelQuantityPurchased: z.number(),
            modelOriginalPrice: z.number(),
            modelDiscountedPrice: z.number(),
            wholesale: z.boolean(),
            weight: z.number(),
            addOnDeal: z.boolean(),
            mainItem: z.boolean(),
            addOnDealId: z.number(),
            promotionType: z.string(),
            promotionId: z.number(),
            orderItemId: z.number(),
            promotionGroupId: z.number(),
            imageInfo: z.object({
              imageUrl: z.string(),
            }),
            productLocationId: z.array(z.string()),
          })
        ),
        messageToSeller: z.string(),
        note: z.string(),
        noteUpdateTime: z.number(),
        orderSn: z.string(),
        orderStatus: z.string(),
        packageList: z.array(
          z.object({
            packageNumber: z.string(),
            logisticsStatus: z.string(),
            shippingCarrier: z.string(),
            itemList: z.array(
              z.object({
                itemId: z.number(),
                modelId: z.number(),
                modelQuantity: z.number(),
              })
            ),
          })
        ),
        payTime: z.number(),
        paymentMethod: z.string(),
        pickupDoneTime: z.number(),
        recipientAddress: z.object({
          name: z.string(),
          phone: z.string(),
          town: z.string(),
          district: z.string(),
          city: z.string(),
          state: z.string(),
          region: z.string(),
          zipcode: z.string(),
          fullAddress: z.string(),
        }),
        region: z.string(),
        shipByDate: z.number(),
        shippingCarrier: z.string(),
        splitUp: z.boolean(),
        totalAmount: z.number(),
        updateTime: z.number(),
      })
    ),
  }).optional(),
  requestId: z.string(),
});

export const getOrderDetail = buildQuery({
  path: API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  requestParameterSchema: getOrderDetailRequestParametersSchema,
  responseSchema: getOrderDetailResponseSchema,
});
