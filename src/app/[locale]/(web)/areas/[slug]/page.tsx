
import { availableLanguages } from "@/lib/config";
import { generateHreflang } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;
    const pageSlug = slug;

  const t = await getTranslations("area.pages." + pageSlug);
  console.log("🚀 ~ t:", t.has("meta"))

  if (!t.has("meta")) {
    return notFound();
  }


  const links = generateHreflang(availableLanguages, "/areas");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: links[locale as typeof availableLanguages[number]],
      languages: links
    },
  };
}



export default async function AreasPage({params}: {
  readonly params: Promise<{
    locale: typeof availableLanguages[number];
    slug: string;
  }
    >
}) {

  const { slug } = await params
  const pageSlug = slug;
  const t = await getTranslations("area.pages." + pageSlug);

  if (!t.has("meta")) {
    return notFound();
  }

  return (
    <>
    <p>hello</p>
      {/* <ContentHero
        useBookingWidget={
          !["fleet-management", "business", "strategic-partners", "travel-agencies"].includes(contentSlug)
        }
        pageTitle={pageContent.pageTitle}
        imageSrc={pageContent.heroImage}
        videoBanner={pageContent.videoBanner}
      />

      <GridContent data={pageContent.gridContent} />
      <ContentRichText data={pageContent.richText} />
      <ContentUSPs data={pageContent.usps} />

      <ImageTextSection data={pageContent.imageTextContents} />
      <FullWidthImageContent data={pageContent.fullImageContent} />
      <CTA />
      <ApplicationContent /> */}
    </>
  );
}
