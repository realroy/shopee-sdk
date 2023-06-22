import { describe, expect, it } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/logistic/get-shipping-parameter", async () => {
  const shopeeSdk = new ShopeeSdk({ isLogEnabled: true });
  const now = new Date();

  const getOrderListResponse = await shopeeSdk.v2.order.getOrderList({
    timeFrom: new Date(new Date().setDate(now.getDate() - 1)),
    timeTo: now,
    pageSize: 10,
    orderStatus: "READY_TO_SHIP",
    timeRangeField: "create_time",
    responseOptionalFields: "order_status",
  });

  it("should receive successfully response", async () => {
    const orderList = getOrderListResponse.response?.orderList;
    const orderSn = orderList?.[0]?.orderSn as string;

    const response = await shopeeSdk.v2.logistic.getShippingParameter({
      orderSn,
    });

    expect(response.error).toHaveLength(0);
  });
});
