import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
 
export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: "PUBLIC_",
  server: {
    // DATABASE_URL: z.string().url(),
    // OPEN_AI_API_KEY: z.string().min(1),
    SHOPEE_SDK_PARTNER_ID: z.coerce.number(),
    SHOPEE_SDK_PARTNER_KEY: z.string(),
    SHOPEE_SDK_BASE_URL: z.string().url(),
    SHOPEE_SDK_SHOP_ID: z.coerce.number(),
    SHOPEE_SDK_REDIRECT_URL: z.string().url(),
  },
  client: {
    // PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: process.env,
});