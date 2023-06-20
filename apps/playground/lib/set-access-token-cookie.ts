import { cookies } from "next/headers";

import { SHOPEE_ACCESS_TOKEN_NAME } from "@/constants";

export function setAccessTokenCookie(accessToken: string, expireIn: number) {
  return cookies().set(SHOPEE_ACCESS_TOKEN_NAME, accessToken, {
    secure: true,
    expires: new Date(Date.now() + expireIn),
  });
}
