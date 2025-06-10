import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
    gold: {
      100: '#fdf6e3',
      200: '#fae8b5',
      300: '#f7d986',
      400: '#f4cb58',
      500: '#f1bc2a',
      600: '#c19722',
      700: '#91721a',
      800: '#614c11',
      900: '#302609',
    },
    champagne: '#f7e7ce',
    ivory: '#fffff0',
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
    gold: {
      100: '#302609',
      200: '#614c11',
      300: '#91721a',
      400: '#c19722',
      500: '#f1bc2a',
      600: '#f4cb58',
      700: '#f7d986',
      800: '#fae8b5',
      900: '#fdf6e3',
    },
    champagne: '#1a150e',
    ivory: '#101010',
  },
};

const config: Config = {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],  
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide': '0.05em',
      },
      colors: {
        gold: themes.light.gold,
        champagne: themes.light.champagne,
        ivory: themes.light.ivory,
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;