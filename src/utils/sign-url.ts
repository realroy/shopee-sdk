import { ShopeeContext } from "@/libs";

import { generateHmac } from "./generate-hmac";
import { toTimestamp } from "./to-timestamp";

export type SignUrlArgs = ShopeeContext["value"] & {
  path: string;
  params: Record<string, unknown>;
};

export function signUrl(args: SignUrlArgs) {
  const {
    partner_id,
    partner_key,
    path,
    base_url,
    access_token,
    shop_id,
    params = {},
  } = args;
  const parsedPartnerId = partner_id.toString();
  const parsedShopId = shop_id.toString();
  const parsedParams = {} as Record<string, string>;

  for (const key in params) {
    const value = params[key];

    if (Array.isArray(value)) {
      parsedParams[key] = [
        value[0],
        ...value.slice(1).map((v) => `&${key}=${v}`),
      ].join("");
    } else if (value instanceof Date) {
      parsedParams[key] = toTimestamp(value);
    } else {
      parsedParams[key] = `${value}`;
    }
  }

  const timestamp = toTimestamp();

  const url = new URL(path, base_url);

  const sign = generateHmac(
    partner_key,
    parsedPartnerId,
    path,
    timestamp,
    access_token,
    parsedShopId
  );

  url.search = new URLSearchParams({
    ...parsedParams,
    partner_id: parsedPartnerId,
    shop_id: parsedShopId,
    access_token,
    sign,
    timestamp,
  }).toString();

  return url
    .toString()
    .replace(new RegExp("%26", "g"), "&")
    .replace(new RegExp("%3D", "g"), "=");
}
