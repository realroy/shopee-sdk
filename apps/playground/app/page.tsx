import { Lock } from "lucide-react";
import Link from "next/link";

import { Button, Card } from "../components";
import { shopeeSdk } from "../lib/shopeeSdk";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-[1024px]">
      <h1 className="text-4xl font-bold text-center">API Status</h1>
      <AuthorizeSection />
    </main>
  );
}

async function AuthorizeSection() {
  shopeeSdk.v2.shop.authPartner({})
  return (
    <section>
      <Card className="p-4 mx-auto max-w-[350px]">
        <Link href={"/"} target="_blank">
          <Button className="w-full">
            <Lock className="mr-2" />
            Authorize
          </Button>
        </Link>
      </Card>
    </section>
  );
}
