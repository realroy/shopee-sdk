import { shopeeSdk } from "@/lib";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: Props) {
  const { code, shopId } = await shopeeSdk.v2.shop.verifyCallback(searchParams);

  const { accessToken, refreshToken, expiresIn, error } =
    await shopeeSdk.v2.publicShopee.getAccessToken({ code, shopId: +shopId });
  console.log({ accessToken, refreshToken, expiresIn, error });
  shopeeSdk.setAccessToken(accessToken);

  return (
    <main>
      <h1>Authorize Successfully</h1>
    </main>
  );
}
