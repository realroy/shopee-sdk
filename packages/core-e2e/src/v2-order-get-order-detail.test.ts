import { describe, expect, it } from "vitest";
import { ShopeeSdk, ORDER_RESPONSE_OPTIONAL_FIELDS } from "@shopee-sdk/core";

describe("v2/order/get-order-detail", async () => {
  const shopeeSdk = new ShopeeSdk({ isLogEnabled: true });
  const now = new Date();
  const orderListResponse = await shopeeSdk.v2.order.getOrderList({
    time_from: new Date(new Date().setDate(now.getDate() - 1)),
    time_to: now,
    page_size: 10,
    order_status: "CANCELLED",
    time_range_field: "create_time",
    response_optional_fields: "order_status",
  });

  it("should receive successfully response", async () => {
    const response = await shopeeSdk.v2.order.getOrderDetail({
      order_sn_list: orderListResponse.response.order_list.map(order => order.order_sn) ?? [],
      response_optional_fields: ORDER_RESPONSE_OPTIONAL_FIELDS.map(field => field)
    });

    expect(response.error).toHaveLength(0);
  });
});
