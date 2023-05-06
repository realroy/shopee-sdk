import { rest } from "msw";
import { faker } from "@faker-js/faker";
import { API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH } from "@shopee-sdk/core";

import { mockURL } from "./utils";

import { MOCKED_GET_ITEM_LIST_ITEMS } from "./v2-product-get-item-list";

import type {
  GetItemBaseInfoResponse,
  GetItemBaseInfoResponseItem,
  GetItemBaseInfoRequestParameters,
} from "@shopee-sdk/core";

export function createGetItemBaseInfoItem(
  args?: Partial<GetItemBaseInfoResponseItem>
) {
  return {
    item_id: args?.item_id ?? faker.datatype.number(),
    category_id: args?.category_id ?? faker.datatype.number(),
    item_name: args?.item_name ?? faker.commerce.productName(),
    item_sku: args?.item_sku ?? faker.random.alphaNumeric(8),
    create_time:
      args?.create_time ??
      faker.datatype
        .datetime({ min: new Date("01/01/2021").getTime(), max: Date.now() })
        .getTime(),
    update_time:
      args?.update_time ??
      faker.datatype
        .datetime({ min: new Date("01/01/2021").getTime(), max: Date.now() })
        .getTime(),
    attribute_list: args?.attribute_list ?? [],
    price_info: args?.price_info ?? [
      {
        currency: "THB",
        original_price: +faker.commerce.price(),
        current_price: +faker.commerce.price(),
      },
    ],
    stock_info_v2: args?.stock_info_v2 ?? {
      summary_info: {
        total_reserved_stock: faker.datatype.number(),
        total_available_stock: faker.datatype.number(),
      },
      seller_stock: [
        {
          location_id: faker.datatype.number().toString(),
          stock: faker.datatype.number(),
        },
      ],
    },
    image: args?.image ?? {
      image_url_list: [faker.image.imageUrl(640, 480, "product")],
      image_id_list: [faker.datatype.uuid()],
    },
    weight: faker.datatype.number().toString(),
    dimension: args?.dimension ?? {
      package_length: faker.datatype.number(),
      package_width: faker.datatype.number(),
      package_height: faker.datatype.number(),
    },
    logistic_info: args?.logistic_info ?? [
      {
        logistic_id: faker.datatype.number(),
        logistic_name: faker.company.name(),
        enabled: faker.datatype.boolean(),
        is_free: faker.datatype.boolean(),
        shipping_fee: faker.datatype.number(),
        estimated_shipping_fee: faker.datatype.number(),
      },
    ],
    pre_order: args?.pre_order ?? {
      is_pre_order: faker.datatype.boolean(),
      days_to_ship: faker.datatype.number(),
    },
    condition: args?.condition ?? faker.datatype.string(),
    size_chart: args?.size_chart ?? faker.datatype.string(),
    item_status: args?.item_status ?? faker.datatype.string(),
    has_model: args?.has_model ?? faker.datatype.boolean(),
    promotion_id: args?.promotion_id ?? faker.datatype.number(),
    brand: args?.brand ?? {
      brand_id: faker.datatype.number(),
      original_brand_name: faker.company.name(),
    },
    tax_info: args?.tax_info,
    description_type: args?.description_type ?? "",
    description_info: args?.description_info ?? {
      extended_description: {
        field_list: [
          {
            field_type: faker.datatype.string(),
            text: faker.commerce.productDescription(),
            image_info: {
              image_id: faker.datatype.number().toString(),
              image_url: faker.image.imageUrl(640, 480, "food"),
            },
          },
        ],
      },
    },
  } satisfies GetItemBaseInfoResponseItem;
}

export function createGetItemBaseInfoResponse(
  args?: Partial<GetItemBaseInfoResponse>
) {
  return {
    error: args?.error ?? "",
    message: args?.message ?? "",
    warning: args?.warning ?? "",
    request_id: args?.request_id ?? faker.datatype.uuid(),
    response: args?.response ?? { item_list: [] },
  } satisfies GetItemBaseInfoResponse;
}

export const MOCKED_GET_ITEM_BASE_INFO_ITEMS = MOCKED_GET_ITEM_LIST_ITEMS.map(
  ({ item_id }) => {
    return createGetItemBaseInfoItem({ item_id });
  }
);

export const getItemBaseInfoMockHandler = rest.get<
  {},
  Record<keyof GetItemBaseInfoRequestParameters, string[]>
>(mockURL(API_V2_PRODUCT_GET_ITEM_BASE_INFO_PATH), (req, res, ctx) => {
  const itemIdList = req.url.searchParams.get("item_id_list");

  return res(
    ctx.status(200),
    ctx.json(
      createGetItemBaseInfoResponse({
        response: {
          item_list: MOCKED_GET_ITEM_BASE_INFO_ITEMS.filter((item) =>
            itemIdList?.includes(item.item_id.toString())
          ),
        },
      })
    )
  );
});
