import { describe, it, expect } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/product/getItemList", () => {
  const shopeeSdk = new ShopeeSdk();

  it("should receive successfully response", async () => {
    const res = await shopeeSdk.v2.product.getItemList({
      offset: 0,
      pageSize: 1,
      itemStatus: ["NORMAL", "BANNED", "DELETED", "UNLIST"],
    });

    expect(res.error).toHaveLength(0);
  });
});
