import { describe, it, expect } from "vitest";

import { ShopeeSdk } from "@/shopee-sdk";

describe("getItemList", () => {
  const shopeeSdk = new ShopeeSdk({
    isMocked: true,
  });

  it("should receive expected shape", async () => {
    expect(() =>
      shopeeSdk.v2.product.getItemList({
        offset: 0,
        page_size: 10,
        item_status: ["NORMAL", "BANNED", "DELETED", "UNLIST"],
      })
    ).not.toThrowError();
  });

  it("should receive successfully response", async () => {
    const res = await shopeeSdk.v2.product.getItemList({
      offset: 0,
      page_size: 10,
      item_status: ["NORMAL", "BANNED", "DELETED", "UNLIST"],
    });

    expect(res.error).toHaveLength(0);
  });
});
