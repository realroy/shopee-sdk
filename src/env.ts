import { z } from "zod"

export const envSchema = z.object({
  partnerId: z.coerce.number().optional(),
  partnerKey: z.coerce.string().optional(),
  baseURL: z.coerce.string().url().optional(),
  accessToken: z.coerce.string().optional(),
  shopId: z.coerce.number().optional(),
})

export type EnvSchema = z.infer<typeof envSchema>

const parseEnv = envSchema.safeParse({
  partnerId: process.env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: process.env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: process.env.SHOPEE_SDK_APP_BASE_URL,
  accessToken: process.env.SHOPEE_SDK_APP_ACCESS_TOKEN,
  shopId: process.env.SHOPEE_SDK1_APP_SHOP_ID,
})

if (!parseEnv.success) {
  throw new Error(parseEnv.error.message)
}

export const env = parseEnv.data