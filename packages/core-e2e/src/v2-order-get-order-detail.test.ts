import { describe, expect, it } from "vitest";
import { ShopeeSdk, V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS } from "@shopee-sdk/core";

describe("v2/order/get-order-detail", async () => {
  const shopeeSdk = new ShopeeSdk({ isLogEnabled: true });
  const now = new Date();
  const getOrderListResponse = await shopeeSdk.v2.order.getOrderList({
    timeFrom: new Date(new Date().setDate(now.getDate() - 1)),
    timeTo: now,
    pageSize: 10,
    orderStatus: 'PROCESSED',
    timeRangeField: "create_time",
    responseOptionalFields: "order_status",
  });

  it("should receive successfully response", async () => {
    const orderList = getOrderListResponse.response?.orderList
    
    const response = await shopeeSdk.v2.order.getOrderDetail({
      orderSnList: orderList?.map(order => order.orderSn) ?? [],
      responseOptionalFields: [...V2_ORDER_DETAIL_RESPONSE_OPTIONAL_FIELDS]
    });

    expect(response.error).toHaveLength(0);
  });
});
