import { describe, it, expect } from "vitest";

import { getItemBaseInfoResponseSchema, getItemBaseInfo } from "./get-item-base-info";

describe("getItemBaseInfo", () => {
  it("should receive successfully response", async () => {
    const response = await getItemBaseInfo({
      item_id_list: [1842255, 1842254, 1836961],
    });

    const parse = await getItemBaseInfoResponseSchema.safeParseAsync(response);

    expect(parse.success).toBeTruthy;
  });
});
