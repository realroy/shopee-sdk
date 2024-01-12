import { ShopeeContext } from "./libs/index.js";
import { generateHmac, toTimestamp } from "./utils/index.js";
import { API_V2_SHOP_AUTH_PARTNER } from "./v2-shop.constant.js";

import type { AuthPartnerRequestParams } from "./v2-shop.type.js";

export async function authPartner({
  redirectURL,
  redirectSign,
}: AuthPartnerRequestParams) {
  const { baseURL, partnerId, partnerKey } = ShopeeContext.getInstance();
  if (!partnerKey || !partnerId) {
    throw new Error("partnerKey is undefined");
  }

  const url = new URL(API_V2_SHOP_AUTH_PARTNER, baseURL);

  const timestamp = toTimestamp(new Date());

  const sign = await generateHmac(
    partnerKey,
    partnerId.toString(),
    API_V2_SHOP_AUTH_PARTNER,
    timestamp
  );

  const parsedRedirectURL = new URL(redirectURL);
  parsedRedirectURL.searchParams.append("sign", redirectSign);

  url.search = new URLSearchParams({
    partner_id: partnerId.toString(),
    redirect: parsedRedirectURL.toString(),
    timestamp,
    sign,
  }).toString();

  return url.toString();
}
