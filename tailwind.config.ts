import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#FCF6EF",
                grayBlack: "#201F20",
                yellowHome: "#F8FAD2",
                redHome: "#FF0101",
                blueHome: "#0071F3",
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
            },
        },
    },
    plugins: [],
} satisfies Config;
