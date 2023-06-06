import { describe, expect, it } from "vitest";
import { ShopeeSdk, V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS } from "@shopee-sdk/core";

describe("v2/logistic/get-tracking-number", async () => {
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
    const orderSn = orderList?.[0]?.orderSn as string;

    const response = await shopeeSdk.v2.logistic.getTrackingNumber({
      orderSn,
      responseOptionalFields: [...V2_LOGISTIC_GET_TRACKING_NUMBER_RESPONSE_OPTIONAL_FIELDS]
    })

    expect(response.error).toHaveLength(0);
  });
});
