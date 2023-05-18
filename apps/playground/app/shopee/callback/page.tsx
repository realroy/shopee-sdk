import { shopeeSdk } from "@/apps/playground/lib/shopeeSdk"

export default async function ShopeeCallbackPage() {
  const {} = await shopeeSdk.v2
  return (
    <main>
      <h1>Authorize Successfully</h1>
    </main>
  )
}