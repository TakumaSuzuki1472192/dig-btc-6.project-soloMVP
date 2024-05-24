import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy設定を書くと、任意のエンドポイントへ相対パスでアクセス時に元パスを変換してくれる
  // これによりフロントエンド側を相対パスで書けるようになる
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
