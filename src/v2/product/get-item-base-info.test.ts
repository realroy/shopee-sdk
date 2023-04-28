import { describe, it, expect } from "vitest";

import {
  getItemBaseInfoResponseSchema,
  getItemBaseInfo,
} from "./get-item-base-info";
import getItemList from "./get-item-list";

describe("getItemBaseInfo", async () => {
  const itemList = await getItemList({
    page_size: 10,
    offset: 0,
    item_status: ["NORMAL"],
  });

  const itemIds =
    itemList.response?.item
      ?.map((item) => item?.item_id)
      ?.filter?.((itemId) => Number.isInteger(itemId)) as number[] ?? ([] as number[]);

  it("should receive successfully response", async () => {
    const response = await getItemBaseInfo({
      item_id_list: itemIds.join(),
    });



    expect(response.error).toHaveLength(0);
  });
});
