import { rest } from "msw";

import { GetItemListResponse, API_V2_PRODUCT_GET_ITEM_LIST } from "@/v2/product";

export function getItemListHandler() {
  rest.get(API_V2_PRODUCT_GET_ITEM_LIST, (req, res, ctx) => {
    res(ctx.status(200), ctx.json<GetItemListResponse>({
      error: '',
      message: '',
      warning: '',
      request_id: '7b9da0c6926642199c33ee9dd3a266f5',
      response: {
        item: []
      },
      total_count: 0,
      has_next_page: false,
      next_offset: 0
    }));
  });

  return {};
}
