import { describe, it, expect } from "vitest";
import { z } from "zod";

import { ShopeeContext, buildQuery } from "../libs";
import { AxiosError } from "axios";

describe("signURL", () => {
  const context = ShopeeContext.getInstance();
  context.baseURL = "https://foo.bar";

  it("should be ok when receive date", async () => {
    try {
      await buildQuery({
        ...context.value,
        path: "/foo",
        requestParameterSchema: z.object({
          date: z.date(),
        }),
        responseSchema: z.object({}),
      })({
        date: new Date("01/01/2021"),
      });
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        throw error;
      }

      const axiosError = error as AxiosError;

      const url = axiosError.config?.url;
      expect(url).toContain("date=1609434000");
    }
  });
});
