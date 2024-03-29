import { z } from "zod";

import { ShopeeContext, buildMutation } from "./libs/index.js";
import { API_V2_AUTH_REFRESH_ACCESS_TOKEN_PATH } from "./v2-auth.constant.js";

export const refreshAccessTokenRequestParametersSchema = z.object({
  refreshToken: z.string(),
  partnerId: z.number().optional(),
  shopId: z.number().optional(),
  merchantId: z.number().optional(),
});

export const refreshAccessTokenResponseSchema = z.object({
  partnerId: z.number(),
  refreshToken: z.string(),
  accessToken: z.string(),
  expireIn: z.number(),
  requestId: z.string(),
  error: z.string(),
  message: z.string(),
  shopId: z.number(),
  merchantId: z.number().optional(),
});

export const refreshAccessToken = buildMutation({
  path: API_V2_AUTH_REFRESH_ACCESS_TOKEN_PATH,
  requestParameterSchema: refreshAccessTokenRequestParametersSchema,
  responseSchema: refreshAccessTokenResponseSchema,
  transformRequestParameter(data) {
    return {
      ...data,
      partnerId: ShopeeContext.getInstance().partnerId,
    };
  },
});
