import { shopeeSdk } from "@/lib";

type ShopeeCallbackPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function ShopeeCallbackPage({ searchParams }: ShopeeCallbackPageProps) {
  const { code, shopId } = await shopeeSdk.v2.shop.verifyCallback(searchParams);
  
  const { access_token, refresh_token, expires_in, error } = await shopeeSdk.v2.publicShopee.getAccessToken({ code, shop_id: +shopId })
  console.log({ access_token, refresh_token, expires_in, error })
  shopeeSdk.setAccessToken(access_token)
  
  return (
    <main>
      <h1>Authorize Successfully</h1>
    </main>
  );
}
