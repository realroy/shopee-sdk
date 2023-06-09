import { describe, it, expect } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/product/getItemBaseInfo", async () => {
  const shopeeSdk = new ShopeeSdk({ isLogEnabled: true });

  const itemList = await shopeeSdk.v2.product.getItemList({
    pageSize: 10,
    offset: 0,
    itemStatus: ["NORMAL", "DELETED", "UNLIST", "BANNED"],
  });

  const itemIds =
    (itemList.response?.item
      ?.map((item) => item?.itemId)
      ?.filter?.((itemId) => Number.isInteger(itemId)) as number[]) ??
    ([] as number[]);

  it("should receive successfully response", async () => {
    const response = await shopeeSdk.v2.product.getItemBaseInfo({
      itemIdList: itemIds.join(),
    });

    expect(response.error).toHaveLength(0);
  });
});
