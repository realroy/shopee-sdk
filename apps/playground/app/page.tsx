import { getAccessTokenFromCookie, shopeeSdk } from "@/lib";

export default async function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-[1024px]">
      <h1 className="text-4xl font-bold text-center">API Status</h1>
      <SectionProductApi />
    </main>
  );
}

export async function SectionProductApi() {
  const accessToken = getAccessTokenFromCookie(true);
  shopeeSdk.setAccessToken(accessToken);
  const { error: getItemListError } = await shopeeSdk.v2.product.getItemList({
    itemStatus: ["NORMAL"],
  });

  return (
    <section>
      <ul>
        <li>
          Get item list status: {getItemListError?.length ? "Error" : "OK"}
        </li>
      </ul>
    </section>
  );
}
