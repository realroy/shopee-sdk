import { z } from "zod";

import { ShopeeContext, buildMutation } from "./libs/index.js";
import { API_V2_AUTH_GET_ACCESS_TOKEN_PATH } from "./v2-auth.constant.js";

export const getAccessTokenRequestParametersSchema = z.object({
  code: z.string(),
  partnerId: z.number().optional(),
  shopId: z.number().optional(),
  mainAccountId: z.number().optional(),
});

export const getAccessTokenResponseSchema = z.object({
  refreshToken: z.string(),
  accessToken: z.string(),
  expireIn: z.number(),
  requestId: z.string(),
  error: z.string(),
  message: z.string(),
  merchantIdList: z.array(z.number()).optional(),
  shopIdList: z.array(z.number()).optional(),
});

export const getAccessToken = buildMutation({
  path: API_V2_AUTH_GET_ACCESS_TOKEN_PATH,
  requestParameterSchema: getAccessTokenRequestParametersSchema,
  responseSchema: getAccessTokenResponseSchema,
  transformRequestParameter(data) {
    return {
      ...data,
      partnerId: ShopeeContext.getInstance().partnerId,
    };
  },
});
