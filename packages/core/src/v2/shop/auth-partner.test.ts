import { describe, expect, it } from "vitest";

import { ShopeeSdk } from "@/shopee-sdk";

describe("authPartner", () => {
  const shopeeSdk = new ShopeeSdk({
    isMocked: process.env?.SHOPEE_SDK_IS_MOCKED === "true",
  });

  it("should return valid authPartner url", async () => {
    const actual = await shopeeSdk.v2.shop.authPartner({
      redirectURL: "https://foo.bar",
      redirectSign: "123",
    });

    expect(() => new URL(actual)).to.not.Throw();
  });
});
