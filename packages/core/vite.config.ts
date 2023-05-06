import { resolve } from "path";
import { defineConfig } from "vite";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "ShopeeSDK",
      // the proper extensions will be added
      fileName: "shopee-sdk",
    },
    rollupOptions: {
      plugins: [nodePolyfills()],
      external: ["zod", "axios", "crypto"],
      output: {
        globals: {
          zod: "zod",
          axios: "axios",
          crypto: "crypto",
        },
      },
    },
  },
});
