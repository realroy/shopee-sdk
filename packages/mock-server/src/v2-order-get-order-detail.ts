import {
  API_V2_ORDER_GET_ORDER_DETAIL_PATH,
  GetOrderDetailRequestParameters,
  GetOrderDetailResponse,
  V2_ORDER_STATUS,
} from "@shopee-sdk/core";
import { rest } from "msw";

import { mockURL } from "./utils";
import { faker } from "@faker-js/faker";

type OrderDetail = NonNullable<
  GetOrderDetailResponse["response"]
>["orderList"][number];

export function createOrderDetail(args?: Partial<OrderDetail>) {
  const orderStatus = V2_ORDER_STATUS[+faker.random.numeric() % V2_ORDER_STATUS.length] ?? 'PROCESSED'
  return {
    orderSn: faker.datatype.uuid(),
    region: faker.address.countryCode("alpha-2"),
    currency: args?.currency ?? "THB",
    cod: true,
    totalAmount: +faker.commerce.price(),
    orderStatus,
    shippingCarrier: "Standard Delivery",
    paymentMethod: "Bank Transfer",
    estimatedShippingFee: +faker.commerce.price(0, 20),
    messageToSeller: faker.lorem.sentence(),
    createTime: Math.floor(new Date().getTime() / 1000),
    updateTime: Math.floor(new Date().getTime() / 1000),
    daysToShip: faker.datatype.number({ min: 1, max: 10 }),
    shipByDate: Math.floor(new Date().getTime() / 1000),
    buyerUserId: +faker.datatype.uuid(),
    buyerUsername: faker.internet.userName(),
    recipientAddress: {
      name: faker.name.fullName(),
      phone: faker.phone.number(),
      town: faker.address.state(),
      district: faker.address.city(),
      city: faker.address.city(),
      state: faker.address.state(),
      region: faker.address.countryCode("alpha-2"),
      zipcode: faker.address.zipCode(),
      fullAddress: faker.address.streetAddress(),
    },
    actualShippingFee: +faker.commerce.price(0, 20),
    goodsToDeclare: faker.datatype.boolean(),
    note: faker.lorem.sentence(),
    noteUpdateTime: Math.floor(new Date().getTime() / 1000),
    itemList: [],
    payTime: Math.floor(new Date().getTime() / 1000),
    dropshipper: '',
    dropshipperPhone: '',
    splitUp: false,
    buyerCancelReason: orderStatus === 'CANCELLED' ? 'Need to Modify Order' : '',
    cancelBy: orderStatus === 'CANCELLED' ? 'buyer' : '',
    cancelReason: 'BACKEND_LOGISTICS_NOT_STARTED',
    actualShippingFeeConfirmed: false,
    buyerCpfId: '',
    fulfillmentFlag: 'fulfilled_by_shopee',
    pickupDoneTime: Math.floor(new Date().getTime() / 1000),
    packageList: [
      {
        packageNumber: faker.datatype.uuid(),
        logisticsStatus: "READY_TO_SHIP",
        shippingCarrier: "Standard Delivery",
        itemList: [
          {
            itemId: +faker.datatype.uuid(),
            modelId: +faker.datatype.uuid(),
            modelQuantity: 1,
          },
          {
            itemId: +faker.datatype.uuid(),
            modelId: +faker.datatype.uuid(),
            modelQuantity: 2,
          },
          {
            itemId: +faker.datatype.uuid(),
            modelId: +faker.datatype.uuid(),
            modelQuantity: 3,
          },
        ],
        parcelChargeableWeightGram: 500,
      },
    ],
    invoiceData: {
      number: faker.datatype.number(999999999).toString(),
      seriesNumber: faker.datatype.number(999).toString(),
      accessKey: faker.random.alphaNumeric(44),
      issueDate: Math.floor(new Date().getTime() / 1000),
      totalValue: +faker.commerce.price(),
      productsTotalValue: +faker.commerce.price(),
      taxCode: faker.datatype.number(9999).toString(),
    },
    checkoutShippingCarrier: 'Standard Delivery',
    reverseShippingFee: 0.00,
    orderChargeableWeightGram: 500,
    edtFrom: Math.floor(new Date().getTime() / 1000),
    edtTo: Math.floor(new Date().getTime() / 1000),
    prescriptionImages: [],
    prescriptionCheckStatus: 0,
  } satisfies OrderDetail;
}

export function createOrderList(n: number) {
  return Array.from({ length: n }).map(() => createOrderDetail());
}

export function createGetOrderDetailResponse(
  args?: Partial<GetOrderDetailResponse> & { orderSnList: string[] }
) {
  return {
    error: args?.error ?? undefined,
    message: args?.message ?? undefined,
    response: {
      orderList: args?.response?.orderList ?? createOrderList(10),
    },
    requestId: faker.datatype.uuid(),
  } satisfies GetOrderDetailResponse;
}

export const getOrderDetailMockHandler = rest.get<
  {},
  Record<keyof GetOrderDetailRequestParameters, string[]>
>(mockURL(API_V2_ORDER_GET_ORDER_DETAIL_PATH), (req, res, ctx) => {
  const orderSnList = req.url.searchParams.get("orderSnList");

  return res(
    ctx.status(200),
    ctx.json(
      createGetOrderDetailResponse({
        orderSnList: orderSnList ? orderSnList.split(",") : [],
      })
    )
  );
});
