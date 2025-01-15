import { availableLanguages } from "@/lib/config";
import { generateHreflang } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import { getTranslations } from "next-intl/server";

import Contact from "@/components/sections/location/contact";
import Hero from "@/components/sections/location/hero";
import Properties from "@/components/sections/location/properties";

export async function generateMetadata({
  params
}: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;
  const pageSlug = slug;

  const t = await getTranslations("area.pages." + pageSlug);

  if (!t.has("meta")) {
    return notFound();
  }

  const links = generateHreflang(availableLanguages, "/areas");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: links[locale as (typeof availableLanguages)[number]],
      languages: links
    }
  };
}

async function fetchProperties(locationId: string) {
  const response = await fetch(
    `${process.env.API_URL}/properties?locationId=${locationId}&page=1&limit=6`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }
  return response.json();
}

export default async function AreasPage({
  params
}: {
  readonly params: Promise<{
    locale: (typeof availableLanguages)[number];
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const pageSlug = slug;
  const t = await getTranslations("area.pages." + pageSlug);

  if (!t.has("meta")) {
    return notFound();
  }

  const locationId = t("locationId");

  const properties = await fetchProperties(locationId);
  console.log("🚀 ~ properties:", properties);
  // console.log("🚀 ~ properties:", properties[2].PropertyMedia);

  // id: 1,
  // name: "Eaton Garth Penthouse",
  // image: "/dubai/properties/property-1.png",
  // price: "$180,000",
  // location: "7722 18th Ave, Brooklyn",
  // beds: 4,
  // baths: 2,
  // sqft: 450

  return (
    <>
      <Hero
        image={t("image")}
        locationName={t("name")}
      />

      <Contact locationName={t("name")} />
      <Properties
        locationName={t("name")}
        properties={properties.map((property: any) => ({
          id: property.id,
          name: property.PropertyContentTranslation && property.PropertyContentTranslation[0].title,
          image:
            property.PropertyMedia &&
            property.PropertyMedia[0] &&
            property.PropertyMedia[0].filePath,
          price: property.priceSale,
          location1: property.Location1.LocationTranslation,
          location2: property.Location2.LocationTranslation,
          location3: property.Location3.LocationTranslation,
          beds: property.bedrooms,
          baths: property.bathrooms,
          sqft: property.interiorSize
        }))}
        // properties={[
        //   {
        //     id: 1,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-1.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   },
        //   {
        //     id: 2,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-2.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   },
        //   {
        //     id: 3,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-3.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   },
        //   {
        //     id: 4,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-4.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   },
        //   {
        //     id: 5,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-5.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   },
        //   {
        //     id: 6,
        //     name: "Eaton Garth Penthouse",
        //     image: "/dubai/properties/property-6.png",
        //     price: "$180,000",
        //     location: "7722 18th Ave, Brooklyn",
        //     beds: 4,
        //     baths: 2,
        //     sqft: 450
        //   }
        // ]}
      />
    </>
  );
}
