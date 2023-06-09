import { describe, it, expect } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/product/getItemExtraInfo", async () => {
  const shopeeSdk = new ShopeeSdk({});

  const itemList = await shopeeSdk.v2.product.getItemList({
    pageSize: 10,
    offset: 0,
    itemStatus: ["NORMAL"],
  });

  const itemIds =
    (itemList.response?.item
      ?.map((item) => item?.itemId)
      ?.filter?.((itemId) => Number.isInteger(itemId)) as number[]) ??
    ([] as number[]);

  it("should receive successfully response", async () => {
    const response = await shopeeSdk.v2.product.getItemExtraInfo({
      itemIdList: itemIds.join(),
    });

    expect(response.error).toHaveLength(0);
  });
});
