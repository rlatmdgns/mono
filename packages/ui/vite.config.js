import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
  assetsInclude: ["/sb-preview/runtime.js"],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "react-carousel-image-optimized",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "stories/**/*",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
  ],
});
