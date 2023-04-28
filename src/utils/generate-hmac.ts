import { createHmac } from "crypto";

export function generateHmac(key: string, ...data: string[]) {
  const hmac = createHmac("sha256", key);
  data.filter((s) => !!s).forEach((s) => hmac.update(s));

  return hmac.digest("hex");
}
