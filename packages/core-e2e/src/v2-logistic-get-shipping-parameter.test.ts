import { describe, expect, it } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/logistic/get-shipping-parameter", async () => {
  const shopeeSdk = new ShopeeSdk({});
  const now = new Date();

  const getOrderListResponse = await shopeeSdk.v2.order.getOrderList({
    time_from: new Date(new Date().setDate(now.getDate() - 1)),
    time_to: now,
    page_size: 10,
    order_status: "CANCELLED",
    time_range_field: "create_time",
    response_optional_fields: "order_status",
  });

  it("should receive successfully response", async () => {
    const orderList = getOrderListResponse.response?.order_list

    const response = await shopeeSdk.v2.logistic.getShippingParameter({
      orderSn: orderList?.[0]?.order_sn ?? ''
    })

    expect(response.error).toHaveLength(0);
  });
});
