import { z } from "zod";

import {
  getAccessTokenRequestParametersSchema,
  getAccessTokenResponseSchema,
} from "./v2-auth-get-access-token";
import {
  refreshAccessTokenRequestParametersSchema,
  refreshAccessTokenResponseSchema,
} from "./v2-auth-refresh-access-token";

export type GetAccessTokenRequestParametersSchema = z.infer<
  typeof getAccessTokenRequestParametersSchema
>;
export type GetAccessTokenResponseSchema = z.infer<
  typeof getAccessTokenResponseSchema
>;

export type RefreshAccessTokenRequestParametersSchema = z.infer<
  typeof refreshAccessTokenRequestParametersSchema
>;
export type RefreshAccessTokenResponseSchema = z.infer<
  typeof refreshAccessTokenResponseSchema
>;
