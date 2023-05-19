import { z } from "zod";

import { buildMutation } from "./libs/build-mutation";
import { API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH } from "./v2-public.constant";

export const getAccessTokenRequestParametersSchema = z.object({
  code: z.string(),
  partner_id: z.number().optional(),
  shop_id: z.number().optional(),
  main_account_id: z.number().optional(),
})

export const getAccessTokenResponseSchema = z.object({
  access_token: z.string(),
  error: z.string(),
  expires_in: z.number(),
  message: z.string(),
  refresh_token: z.string(),
  request_id: z.string(),
  shop_id_list: z.array(z.number()),
})

export const getAccessToken = buildMutation({
  path: API_V2_PUBLIC_GET_ACCESS_TOKEN_PATH,
  requestParameterSchema: getAccessTokenRequestParametersSchema,
  responseSchema: getAccessTokenResponseSchema,
});
