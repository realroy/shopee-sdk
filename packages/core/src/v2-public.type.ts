import { z } from "zod";

import {
  getAccessTokenRequestParametersSchema,
  getAccessTokenResponseSchema,
} from "./v2-public-get-access-token";

export type GetAccessTokenRequestParametersSchema = z.infer<
  typeof getAccessTokenRequestParametersSchema
>;
export type GetAccessTokenResponseSchema = z.infer<
  typeof getAccessTokenResponseSchema
>;