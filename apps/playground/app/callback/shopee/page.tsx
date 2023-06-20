import { cookies } from "next/headers";

import { shopeeSdk } from "@/lib";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: Props) {
  const { code, shopId } = await shopeeSdk.v2.shop.verifyCallback(searchParams);

  const { accessToken, refreshToken, expireIn, error } =
    await shopeeSdk.v2.getAccessToken({ code, shopId: +shopId });

  shopeeSdk.setAccessToken(accessToken);

  cookies().set("shopee_access_token", accessToken, {
    secure: true,
    expires: new Date(Date.now() + expireIn),
  });

  return (
    <main>
      <h1>Authorize Successfully</h1>
    </main>
  );
}
