import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#FCF6EF",
                grayBlack: "#201F20",
                yellowHome: "#F8FAD2",
                orange: "#FF5C00",
                redHome: "#FF0101",
                blueHome: "#0071F3",
                saumon: "#FCDED7",
            },
            fontFamily: {
                clash: ["Clash"],
                clashBold: ["Clash-Bold"],
                clashMedium: ["Clash-Medium"],
                clashExtra: ["Clash-Extra"],
                clashSemibold: ["Clash-Semibold"],
                clashLight: ["Clash-Light"],
                kate: ["kate"],
                kateMedium: ["kate-medium"],
                kateBlak: ["kate-black"],
                neueMedium: ["neue-medium"],
                neueSemiBold: ["neue-semi"],
                neueBold: ["neue-bold"],
                neueExtra: ["neue-extra"],
                footer: ["Public Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
} satisfies Config;
