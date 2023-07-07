import { z } from "zod";

import { buildQuery } from "./libs";
import {
  API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS,
  V2_ORDER_STATUS,
} from "./v2-order.constant";

export const getOrderDetailRequestParametersSchema = z.object({
  orderSnList: z.array(z.string()),
  responseOptionalFields: z
    .array(z.enum(V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS))
    .optional(),
});

export const getOrderDetailResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional(),
  response: z
    .object({
      orderList: z.array(
        z.object({
          checkoutShippingCarrier: z.string().nullable(),
          reverseShippingFee: z.number().nullable(),
          actualShippingFee: z.number().nullable(),
          actualShippingFeeConfirmed: z.boolean(),
          buyerCancelReason: z.string(),
          buyerCpfId: z.string().nullable(),
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
          estimatedShippingFee: z.number(),
          fulfillmentFlag: z.string(),
          goodsToDeclare: z.boolean(),
          invoiceData: z
            .object({
              number: z.string(),
              seriesNumber: z.string(),
              accessKey: z.string(),
              issueDate: z.number(),
              totalValue: z.number(),
              productsTotalValue: z.number(),
              taxCode: z.string(),
            })
            .nullable(),
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
          prescriptionImages: z.array(z.string()).nullable(),
          prescriptionCheckStatus: z.number().nullable(),
          edtFrom: z.number().optional(),
          edtTo: z.number().optional(),
          orderChargeableWeightGram: z.number(),
          messageToSeller: z.string(),
          note: z.string(),
          noteUpdateTime: z.number(),
          orderSn: z.string(),
          orderStatus: z.enum(V2_ORDER_STATUS),
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
              parcelChargeableWeightGram: z.number(),
            })
          ),
          payTime: z.number().nullable(),
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
    })
    .optional(),
  requestId: z.string(),
});

export const getOrderDetail = buildQuery({
  path: API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  requestParameterSchema: getOrderDetailRequestParametersSchema,
  transformRequestParameterSchema: getOrderDetailRequestParametersSchema.extend(
    { responseOptionalFields: z.string().optional() }
  ),
  transformRequestParameter(data) {
    return {
      ...data,
      responseOptionalFields: data.responseOptionalFields?.join(","),
    };
  },
  responseSchema: getOrderDetailResponseSchema,
});
