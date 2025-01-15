export type Property = {
  id: number;
  name: string;
  priceSale: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  interiorSize: number;

  // relationships
  Location1: {
    LocationTranslation: LocationTranslation[];
  };
  Location2: {
    LocationTranslation: LocationTranslation[];
  };
  Location3: {
    LocationTranslation: LocationTranslation[];
  };
  PropertyContentTranslation: PropertyContentTranslation[];
  PropertyMedia: PropertyMedia[];
};

export type PropertyContentTranslation = {
  id: number;
  propertyId: number;
  title: string;
  description: string;
};

export type PropertyMedia = {
  id: number;
  propertyId: number;
  name: string;
  type: string;
  filePath: string;
  order: number;
};

export type LocationTranslation = {
  id: number;
  locationId: number;
  countryCode: string;
  language: string;
  name: string;
  slug: string;
  fullSlug: string;
};
