import { describe, it, expect } from "vitest";

import { getItemList } from "./get-item-list";

describe("getItemList", () => {
  it("should receive expected shape", async () => {
    expect(() =>
      getItemList({
        offset: 0,
        page_size: 10,
        item_status: ["NORMAL", "BANNED", "DELETED", "UNLIST"],
      })
    ).not.toThrowError();
  });

  it("should receive successfully response", async () => {
    const res = await getItemList({
      offset: 0,
      page_size: 10,
      item_status: ["NORMAL", "BANNED", "DELETED", "UNLIST"],
    });

    expect(res.error).toHaveLength(0);
  });
});
