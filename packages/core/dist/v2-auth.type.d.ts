import { z } from "zod";
import { getAccessTokenRequestParametersSchema, getAccessTokenResponseSchema } from "./v2-auth-get-access-token";
export type GetAccessTokenRequestParametersSchema = z.infer<typeof getAccessTokenRequestParametersSchema>;
export type GetAccessTokenResponseSchema = z.infer<typeof getAccessTokenResponseSchema>;
//# sourceMappingURL=v2-auth.type.d.ts.map