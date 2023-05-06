import { z } from "zod";

import {
  getItemExtraInfoRequestParametersSchema,
  getItemExtraInfoResponseSchema,
} from "./v2-product-get-item-extra-info";
import {
  getItemBaseInfoRequestParametersSchema,
  getItemBaseInfoResponseSchema,
} from "./v2-product-get-item-base-info";
import {
  getItemListRequestParametersSchema,
  getItemListResponseSchema,
} from "./v2-product-get-item-list";

export type GetItemExtraInfoResponse = z.infer<
  typeof getItemExtraInfoResponseSchema
>;

export type GetItemExtraInfoResponseItem = NonNullable<NonNullable<GetItemExtraInfoResponse['response']>['item_list']>[number]

export type GetItemExtraInfoRequestParameters = z.infer<
  typeof getItemExtraInfoRequestParametersSchema
>;

export type GetItemBaseInfoResponse = z.infer<
  typeof getItemBaseInfoResponseSchema
>;

export type GetItemBaseInfoRequestParameters = z.infer<
  typeof getItemBaseInfoRequestParametersSchema
>;

export type GetItemBaseInfoResponseItem = NonNullable<GetItemBaseInfoResponse['response']['item_list']>[number]


export type GetItemListRequestParameters = z.infer<
  typeof getItemListRequestParametersSchema
>;

export type GetItemListResponse = z.infer<typeof getItemListResponseSchema>;

export type GetItemListResponseItem = NonNullable<NonNullable<GetItemListResponse['response']>['item']>[number]
