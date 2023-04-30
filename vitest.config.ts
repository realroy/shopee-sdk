import { defineConfig } from "vitest/config";

export default defineConfig({
  envPrefix: "SHOPEE_SDK_",
  root: ".",
  resolve: {
    alias: {
      "@/": "./src/",
    },
  },
});
