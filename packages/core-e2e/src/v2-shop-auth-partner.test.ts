import { describe, expect, it } from "vitest";

import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/shop/authPartner", () => {
  const shopeeSdk = new ShopeeSdk({});

  it("should return valid authPartner url", async () => {
    const actual = await shopeeSdk.v2.shop.authPartner({
      redirectURL: "https://foo.bar",
      redirectSign: "123",
    });

    expect(() => new URL(actual)).to.not.Throw();
  });
});
