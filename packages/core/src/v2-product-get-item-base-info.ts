import { z } from "zod";

import { buildQuery } from "./libs/index.js";
import { API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH } from "./v2-product.constant.js";

export const getItemBaseInfoRequestParametersSchema = z.object({
  itemIdList: z.string(),
  needTaxInfo: z.coerce.boolean().optional(),
  needComplaintPolicy: z.coerce.boolean().optional(),
});

export const getItemBaseInfoResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  warning: z.string(),
  requestId: z.string(),
  response: z.object({
    itemList: z
      .array(
        z.object({
          itemId: z.number(),
          categoryId: z.number(),
          itemName: z.string(),
          itemSku: z.string(),
          createTime: z.number(),
          updateTime: z.number(),
          attributeList: z
            .array(
              z.object({
                attributeId: z.number(),
                originalAttributeName: z.string(),
                isMandatory: z.boolean(),
                attributeValueList: z.array(
                  z.object({
                    valueId: z.number(),
                    originalValueName: z.string(),
                    valueUnit: z.string(),
                  })
                ),
              })
            )
            .optional(),
          priceInfo: z
            .array(
              z.object({
                currency: z.string(),
                originalPrice: z.number(),
                currentPrice: z.number(),
              })
            )
            .optional(),
          stockInfoV2: z
            .object({
              summaryInfo: z.object({
                totalReservedStock: z.number(),
                totalAvailableStock: z.number(),
              }),
              sellerStock: z
                .array(
                  z.object({
                    locationId: z.string(),
                    stock: z.number(),
                  })
                )
                .optional(),
            })
            .optional(),
          image: z.object({
            imageUrlList: z.array(z.string()),
            imageIdList: z.array(z.string()),
          }),
          weight: z.string(),
          dimension: z.object({
            packageLength: z.number(),
            packageWidth: z.number(),
            packageHeight: z.number(),
          }),
          logisticInfo: z
            .array(
              z.object({
                logisticId: z.number(),
                logisticName: z.string(),
                enabled: z.boolean(),
                shippingFee: z.number().optional(),
                isFree: z.boolean(),
                estimatedShippingFee: z.number().optional(),
              })
            )
            .optional(),
          preOrder: z.object({
            isPreOrder: z.boolean(),
            daysToShip: z.number(),
          }),
          condition: z.string(),
          sizeChart: z.string(),
          itemStatus: z.string(),
          hasModel: z.boolean(),
          promotionId: z.number().optional(),
          brand: z.object({
            brandId: z.number(),
            originalBrandName: z.string(),
          }),
          taxInfo: z
            .object({
              ncm: z.number(),
              sameStateCfop: z.number(),
              diffStateCfop: z.number(),
              csosn: z.number(),
              origin: z.number(),
            })
            .optional(),
          descriptionType: z.string(),
          descriptionInfo: z
            .object({
              extendedDescription: z
                .object({
                  fieldList: z.array(
                    z.object({
                      fieldType: z.string(),
                      text: z.string().optional(),
                      imageInfo: z
                        .object({
                          imageId: z.string(),
                          imageUrl: z.string(),
                        })
                        .optional(),
                    })
                  ),
                })
                .optional(),
            })
            .optional(),
        })
      )
      .optional(),
  }),
});

export const getItemBaseInfo = buildQuery({
  path: API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH,
  requestParameterSchema: getItemBaseInfoRequestParametersSchema,
  responseSchema: getItemBaseInfoResponseSchema,
  transformRequestParameter(data) {
    data.needTaxInfo = Boolean(data.needTaxInfo);
    data.needComplaintPolicy = Boolean(data.needComplaintPolicy);

    return data;
  },
});
