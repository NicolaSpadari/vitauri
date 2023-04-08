import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith("i-")
                }
            }
        }),
        Pages({
            extensions: ["vue"]
        }),
        UnoCSS(),
        Components({
            extensions: ["vue"],
            dirs: ["src/components"],
            deep: false
        }),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "@vueuse/core",
                {
                    "@tauri-apps/api/app": ["getName", "getVersion", "getTauriVersion"],
                    "@tauri-apps/api/shell": ["Command"],
                    "@tauri-apps/api/os": ["platform"],
                    "@tauri-apps/api/notification": ["sendNotification", "requestPermission", "isPermissionGranted"]
                }
            ],
            dirs: ["./src/composables"]
        })
    ],
    build: {
        rollupOptions: {
            output: {
                inlineDynamicImports: true
            }
        }
    },
    server: {
        fs: {
            allow: [".."]
        },
        host: true,
        port: 8080,
        strictPort: true
    }
});
