import { defineConfig } from "vite-plugin-windicss";
import BsGrid from "@spada/windicss-plugin-bsgrid";

export default defineConfig({
    transformCSS: "pre",
    attributify: false,
    darkMode: "class",
    extract: {
        include: ["index.html", "src/**/*.{vue,html,ts,js}"],
        exclude: ["node_modules", ".gitignore", ".eslintrc", ".eslintignore", ".env"]
    },
    corePlugins: {
        container: false
    },
    theme: {
        colors: {
            white: "#ffffff",
            dark: "#222324",
            darker: "#181a1b",
            accent: "#67d6ed"
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px"
        }
    },
    plugins: [BsGrid()]
});
