import React from "react";
import MobileNavigationController from "./mobile-navation-controller";
import { useTranslations } from "next-intl";

export function MobileNavigation() {
  const t = useTranslations("navigation");
  const tLocation = useTranslations("area.pages");

  return (
    <MobileNavigationController
      slugs={{
        palmJumeirah: tLocation("palm-jumeirah.slug"),
        dubaiHillsEstate: tLocation("dubai-hills-estate.slug"),
        emiratesHills: tLocation("emirates-hills.slug"),
        jumeirahBayIslands: tLocation("jumeirah-bay-islands.slug"),
        dubaiIslands: tLocation("dubai-islands.slug"),
        downtownDubai: tLocation("dubai-downtown.slug")
      }}
      translations={{
        palmJumeirah: tLocation("palm-jumeirah.name"),
        dubaiHillsEstate: tLocation("dubai-hills-estate.name"),
        emiratesHills: tLocation("emirates-hills.name"),
        jumeirahBayIslands: tLocation("jumeirah-bay-islands.name"),
        dubaiIslands: tLocation("dubai-islands.name"),
        downtownDubai: tLocation("dubai-downtown.name"),
        home: t("home"),
        areas: t("areas"),
        properties: t("properties"),
        about: t("about"),
        people: t("people"),
        contactUs: t("contact")
      }}
    />
  );
}

export default MobileNavigation;
