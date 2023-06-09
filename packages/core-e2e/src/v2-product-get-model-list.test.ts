import { describe, it, expect } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/product/getModelList", async () => {
  const shopeeSdk = new ShopeeSdk({});

  const { response: getItemListResponse } =
    await shopeeSdk.v2.product.getItemList({
      pageSize: 10,
      offset: 0,
      itemStatus: ["NORMAL"],
    });

  const getModelList = () => {
    const item = getItemListResponse?.item?.[0];

    if (!item) throw new Error("item not found");

    return shopeeSdk.v2.product.getModelList({ item_id: `${item?.itemId}` });
  };

  it("should receive expected shape", async () => {
    expect(getModelList).not.toThrowError();
  });

  it("should receive successfully response", async () => {
    const res = await getModelList();

    expect(res.error).toHaveLength(0);
  });
});
