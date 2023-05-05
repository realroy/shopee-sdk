import { env } from "@/env";

export function mockURL(path: string) {
  return new URL(path, env.baseURL).toString();
}
