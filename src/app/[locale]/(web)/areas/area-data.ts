import { availableLanguages } from "@/lib/config";


type AreaContent = {
  [key in (typeof availableLanguages)[number]]: {
    meta: {
      title: string;
      description: string;
    }
  };
};

const areas: {
  [key: string]: {
    locationId: number;
    image: string;
    name: string;
    slug: string;
    content: AreaContent;
  };
} = {
  "palm-jumeirah": {
    locationId: 1,
    image: "/dubai/areas/palm-jumeirah.jpg",
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  },
  "dubai-hills-estate": {
    locationId: 2,
    image: "/dubai/areas/dubai-hills-estate.jpg",
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  },
  "emirates-hills": {
    locationId: 3,
    image: "/dubai/areas/emirates-hills.jpg",
    name: "Emirates Hills",
    slug: "emirates-hills",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  },
  "jumeirah-bay-islands": {
    locationId: 4,
    image: "/dubai/areas/jumeirah-bay-islands.jpg",
    name: "Jumeirah Bay Islands",
    slug: "jumeirah-bay-islands",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  },
  "dubai-islands": {
    locationId: 5,
    image: "/dubai/areas/dubai-islands.jpg",
    name: "Dubai Islands",
    slug: "dubai-islands",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  },
  "dubai-downtown": {
    locationId: 6,
    image: "/dubai/areas/dubai-downtown.jpg",
    name: "Downtown Dubai",
    slug: "dubai-downtown",
    content: {
      en: {
        meta: {

          title: "Palm Jumeirah",
          description: "Palm J"
        }
      }
    }
  }
};

export const topAreas = Object.keys(areas).map((area) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { content, ...rest } = areas[area as keyof typeof areas];
  return rest;
});

export const getContent = (areaSlug: keyof typeof areas, locale: (typeof availableLanguages)[number]) => {
  const area = areas[areaSlug];
  if (!area) return null;

  return area.content[locale];
}