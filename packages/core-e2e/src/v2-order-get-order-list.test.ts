import { describe, expect, it } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe('v2/order/get-order-list', () => {
  const shopeeSdk = new ShopeeSdk({});

  it("should receive successfully response", async () => {
    const now = new Date()

    const response = await shopeeSdk.v2.order.getOrderList({
      time_from: new Date(new Date().setDate(now.getDate() - 1)),
      time_to: now,
      page_size: 10,
      order_status: 'CANCELLED',
      time_range_field: 'create_time',
      response_optional_fields: "order_status"
    })

    expect(response.error).toHaveLength(0);
  });
})