import { z } from "zod"

export const envSchema = z.object({
  partnerId: z.coerce.number(),
  partnerKey: z.coerce.string(),
  baseURL: z.coerce.string().url(),
  accessToken: z.coerce.string().optional(),
  shopId: z.coerce.number(),
})

export type EnvSchema = z.infer<typeof envSchema>

const parseEnv = envSchema.safeParse({
  partnerId: process.env.VITE_APP_PARTNER_ID,
  partnerKey: process.env.VITE_APP_PARTNER_KEY,
  baseURL: process.env.VITE_APP_BASE_URL,
  accessToken: process.env.VITE_APP_ACCESS_TOKEN,
  shopId: process.env.VITE_APP_SHOP_ID,
})

if (!parseEnv.success) {
  throw new Error(parseEnv.error.message)
}

export const env = parseEnv.data