import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      white:{
        DEFAULT:'ffffff'
      },
      black:{
        DEFAULT:'333333'
      }
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
