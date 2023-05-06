import { describe, it, expect } from "vitest";

import ShopeeSdk from "@/shopee-sdk";

describe("getItemBaseInfo", async () => {
  const shopeeSdk = new ShopeeSdk({});

  const itemList = await shopeeSdk.v2.product.getItemList({
    page_size: 10,
    offset: 0,
    item_status: ["NORMAL"],
  });

  const itemIds =
    (itemList.response?.item
      ?.map((item) => item?.item_id)
      ?.filter?.((itemId) => Number.isInteger(itemId)) as number[]) ??
    ([] as number[]);

  it("should receive successfully response", async () => {
    const response = await shopeeSdk.v2.product.getItemBaseInfo({
      item_id_list: itemIds.join(),
    });

    expect(response.error).toHaveLength(0);
  });
});
