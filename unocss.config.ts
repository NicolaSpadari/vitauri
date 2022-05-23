import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";

export default defineConfig({
    shortcuts: [],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                heading: {
                    name: "Montserrat",
                    weights: ["400", "700"]
                },
                sans: {
                    name: "DM Sans",
                    weights: ["400", "700"]
                }
            }
        })
    ],
    theme: {
        colors: {
            white: "#ffffff",
            dark: "#222324",
            darker: "#181a1b",
            accent: "#67d6ed"
        },
        breakpoints: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px"
        }
    },
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
});
