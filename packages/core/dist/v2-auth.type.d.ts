import { z } from "zod";
import { getAccessTokenRequestParametersSchema, getAccessTokenResponseSchema } from "./v2-auth-get-access-token.js";
import { refreshAccessTokenRequestParametersSchema, refreshAccessTokenResponseSchema } from "./v2-auth-refresh-access-token.js";
export type GetAccessTokenRequestParametersSchema = z.infer<typeof getAccessTokenRequestParametersSchema>;
export type GetAccessTokenResponseSchema = z.infer<typeof getAccessTokenResponseSchema>;
export type RefreshAccessTokenRequestParametersSchema = z.infer<typeof refreshAccessTokenRequestParametersSchema>;
export type RefreshAccessTokenResponseSchema = z.infer<typeof refreshAccessTokenResponseSchema>;
//# sourceMappingURL=v2-auth.type.d.ts.map