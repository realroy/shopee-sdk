import { ShopeeSdk } from "@shopee-sdk/core";
import { env } from "../env";

const shopeeSdk = new ShopeeSdk({
  partnerId: env.SHOPEE_SDK_PARTNER_ID,
  partnerKey: env.SHOPEE_SDK_PARTNER_KEY,
  baseURL: env.SHOPEE_SDK_BASE_URL,
  shopId: env.SHOPEE_SDK_SHOP_ID,
});

shopeeSdk.setIsLogEnabled(true);

export { shopeeSdk };
