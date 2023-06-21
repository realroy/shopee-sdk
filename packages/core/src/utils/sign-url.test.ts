import { describe, expect, it } from "vitest";

import { signURL } from "./sign-url";
import { ShopeeContext } from "../libs";

describe("signURL", () => {
  const context = ShopeeContext.getInstance();
  context.baseURL = "https://foo.bar";

  it("should be ok when receive date", async () => {
    const url = await signURL({
      ...context.value,
      path: "/foo",
      params: {
        date: new Date("01/01/2021"),
      },
    });

    expect(url).toContain("date=1609434000");
  });
});
