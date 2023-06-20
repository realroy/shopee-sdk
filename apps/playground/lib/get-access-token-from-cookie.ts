import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { SHOPEE_ACCESS_TOKEN_NAME } from "@/constants";

export function getAccessTokenFromCookie(isForceAuth = false) {
  const accessToken = cookies().get(SHOPEE_ACCESS_TOKEN_NAME)?.value;
  if (!accessToken && isForceAuth) {
    return redirect("/shopee/authorize");
  }

  return accessToken;
}
