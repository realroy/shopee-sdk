import { z } from "zod";

import { ShopeeContext, buildMutation } from "./libs";
import { API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH } from "./v2-public.constant";

export const getAccessTokenRequestParametersSchema = z.object({
  code: z.string(),
  partnerId: z.number().optional(),
  shopId: z.number().optional(),
  mainAccountId: z.number().optional(),
});

export const getAccessTokenResponseSchema = z.object({
  accessToken: z.string(),
  error: z.string(),
  expireIn: z.number(),
  message: z.string(),
  refreshToken: z.string(),
  requestId: z.string(),
  merchantIdList: z.array(z.number()).optional(),
  shopIdList: z.array(z.number()).optional(),
});

export const getAccessToken = buildMutation({
  path: API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  requestParameterSchema: getAccessTokenRequestParametersSchema,
  responseSchema: getAccessTokenResponseSchema,
  transformRequestParameter(data) {
    return {
      ...data,
      partnerId: ShopeeContext.getInstance().partnerId,
    };
  },
});
