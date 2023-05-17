import { describe, expect, it } from "vitest";

import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/shop/verifyCallback", async () => {
  const shopeeSdk = new ShopeeSdk({});

  it("should return valid authPartner url", async () => {
    const query = {
      sign: "123",
      code: "456",
      shopId: "789",
    };

    const verifyCallback = () => shopeeSdk.v2.shop.verifyCallback(query);

    expect(verifyCallback).not.toThrowError();
  });
});
