import { Suspense } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import * as jwt from "jsonwebtoken";

import { shopeeSdk } from "@/lib";
import { env } from "@/env";
import { Button, Card, Loader } from "@/components";

export default async function ShopeeAuthorizePage() {
  return (
    <main>
      <h1 className="text-2xl text-center">Authorize</h1>
      <section>
        <Card className="p-4 mx-auto max-w-[350px]">
          <Suspense fallback={<Loader />}>
            {/* @ts-expect-error Server Component */}
            <AuthorizeButton />
          </Suspense>
        </Card>
      </section>
    </main>
  );
}

export async function AuthorizeButton() {
  const redirectSign = jwt.sign(
    { sub: env.SHOPEE_SDK_SHOP_ID },
    env.SHOPEE_SDK_PARTNER_KEY
  );

  const href = await shopeeSdk.v2.shop.authPartner({
    redirectSign,
    redirectURL: env.SHOPEE_SDK_REDIRECT_URL,
  });

  return (
    <Link href={href} target="_blank">
      <Button className="w-full">
        <Lock className="mr-2" />
        Authorize
      </Button>
    </Link>
  );
}
