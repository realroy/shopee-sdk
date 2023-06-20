import { setAccessTokenCookie, shopeeSdk } from "@/lib";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const { code, shopId } = await shopeeSdk.v2.shop.verifyCallback(searchParams);

  const { accessToken, refreshToken, expireIn, error } =
    await shopeeSdk.v2.getAccessToken({ code, shopId: +shopId });

  shopeeSdk.setAccessToken(accessToken);

  setAccessTokenCookie(accessToken, expireIn);

  return NextResponse.redirect("/shopee");
}
