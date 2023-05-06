import { resolve } from "path";
import { defineConfig } from "vite";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default defineConfig({
  resolve: {
    alias: {
      "@/": "/src/",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MockServer",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      plugins: [nodePolyfills()],
      external: [
        "zod",
        "timers",
        "http",
        "https",
        "crypto",
        "node:crypto",
        "stream",
        "zlib",
        "@shopee-sdk/core"
      ],
      output: {
        globals: {
          zod: "zod",
          timers: "timers",
          http: "http",
          https: "https",
          crypto: "crypto",
          "node:crypto": "node:crypto",
          stream: "stream",
          zlib: "zlib",
          "@shopee-sdk/core": "@shopee-sdk/core"
        },
      },
    },
  },
});
