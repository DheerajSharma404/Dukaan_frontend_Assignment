/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontfamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "regular-12": [
        "var(--fs-regular-12)",
        { lineHeight: "var(--lh-regular-12)" },
      ],
      "regular-13": [
        "var(--fs-regular-13)",
        { lineHeight: "var(--lh-regular-13)" },
      ],
      "regular-14": [
        "var(--fs-regular-14)",
        { lineHeight: "var(--lh-regular-14)" },
      ],
      "regular-15": [
        "var(--fs-regular-15)",
        { lineHeight: "var(--lh-regular-15)" },
      ],
      "regular-16": [
        "var(--fs-regular-16)",
        { lineHeight: "var(--lh-regular-16)" },
      ],
      "medium-14": [
        "var(--fs-medium-14)",
        { lineHeight: "var(--lh-medium-14)" },
      ],
      "medium-15": [
        "var(--fs-medium-15)",
        { lineHeight: "var(--lh-medium-15)" },
      ],
      "medium-16": [
        "var(--fs-medium-16)",
        { lineHeight: "var(--lh-medium-16)" },
      ],
      "medium-20": [
        "var(--fs-medium-20)",
        { lineHeight: "var(--lh-medium-20)" },
      ],
      "medium-32": [
        "var(--fs-medium-32)",
        { lineHeight: "var(--lh-medium-32)" },
      ],
    },
    colors: {
      "black-50": "var(--black-50)",

      "navy-blue-50": "var(--navy-blue-50)",
      "navy-blue-100": "var(--navy-blue-100)",

      "blue-50": "var(--blue-50)",

      "white-50": "var(--white-50)",
      "white-100": "var(--white-100)",

      "gray-50": "var(--gray-50)",
      "gray-100": "var(--gray-100)",
      "gray-125": "var(--gray-125)",
      "gray-150": "var(--gray-150)",
    },
    extend: {
      width: {
        sidebar: "14rem",
        custom: "calc(100% - 14rem)",
      },
      borderRadius: {
        small: "var(--radius-small)",
        normal: "var(--radius-normal)",
      },
    },
  },
  plugins: [],
};
