import { describe, expect, it } from "vitest";

import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/order/get-order-list", () => {
  const shopeeSdk = new ShopeeSdk({ isLogEnabled: true });

  it("should receive successfully response", async () => {
    const now = new Date();
    const timeFrom = new Date(new Date().setDate(now.getDate() - 1));

    const response = await shopeeSdk.v2.order.getOrderList({
      timeFrom,
      timeTo: now,
      pageSize: 10,
      orderStatus: "PROCESSED",
      timeRangeField: "create_time",
      responseOptionalFields: "order_status",
    });

    expect(response.error).toHaveLength(0);
  });
});
