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
    image: string;
    name: string;
    slug: string;
    content: AreaContent;
  };
} = {
  "palm-jumeirah": {
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
  const { content, ...rest } = areas[area as keyof typeof areas];
  return rest;
});

export const getContent = (areaSlug: keyof typeof areas, locale: (typeof availableLanguages)[number]) => {
  const area = areas[areaSlug];
  if (!area) return null;

  return area.content[locale];
}