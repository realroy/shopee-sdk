import { describe, it, expect } from "vitest";
import { ShopeeSdk } from "@shopee-sdk/core";

describe("v2/product/getModelList", async () => {
  const shopeeSdk = new ShopeeSdk({});

  const { response: getItemListResponse } = await shopeeSdk.v2.product.getItemList({
    page_size: 10,
    offset: 0,
    item_status: ["NORMAL"],
  });


  const getModelList = () => {
    const item = getItemListResponse?.item?.[0]

    if (!item) throw new Error('item not found')

    return shopeeSdk.v2.product.getModelList({ item_id: `${item?.item_id}` })
  }

  it("should receive expected shape", async () => {
    expect(getModelList).not.toThrowError();
  });

  it("should receive successfully response", async () => {
    const res = await getModelList()

    expect(res.error).toHaveLength(0);
  });
});
