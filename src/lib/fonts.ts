import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "700"]
});

// local fonts
export const suisse = localFont({
  src: [
    {
      path: "./fonts/Suisse/SuisseIntl-Thin.otf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Light.ttf", // Light uses TTF
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  // weight: "400",
  style: "normal",
  variable: "--font-suisse", // CSS variable (optional)
  display: "swap" // Improves font loading performance
});

export const romain = localFont({
  src: "./fonts/Romain/RomainHeadline-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-romain", // CSS variable (optional)
  display: "swap" // Improves font loading performance
});
