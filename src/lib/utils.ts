import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { availableLanguages, domain } from "./config";
import { getPathname } from "@/i18n/routing";
import { LocationTranslation } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type HreflangReturnType = {
  [key in (typeof availableLanguages)[number]]: string;
} & {
  "x-default": string;
};

export const generateHreflang = (
  languages: typeof availableLanguages,
  pathname: string
): HreflangReturnType => {
  const hreflang = languages.reduce((acc, lang) => {
    const path = getPathname({
      locale: lang,
      href: pathname
    });

    const url = `${domain}${path}`;
    return {
      ...acc,
      [lang]: url.replace(/\/$/, "") // Remove trailing slash
    };
  }, {} as HreflangReturnType);

  return {
    ...hreflang,
    ["x-default"]: hreflang[availableLanguages[0]] // Default language is the first one
  };
};

export function getCookieValue(name: string): string | null {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}


export const getLocationName = (
  location_1?: LocationTranslation[],
  location_2?: LocationTranslation[],
  location_3?: LocationTranslation[]
) => {
  return [
    location_3?.[0]?.name ?? null,
    location_2?.[0]?.name ?? null,
    location_1?.[0]?.name ?? null
  ]
    .filter(Boolean)
    .join(", ");
};
