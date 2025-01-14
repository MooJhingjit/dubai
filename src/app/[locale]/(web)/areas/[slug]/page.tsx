
import { availableLanguages } from "@/lib/config";
import { generateHreflang } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getContent } from "../area-data";

type ContentPageProps = {
  readonly params: {
    locale: typeof availableLanguages[number];
    slug: string[];
  };
};

export async function generateMetadata({
  params,
}: ContentPageProps): Promise<Metadata> {
  const contentSlug = params.slug[0];
  const locale = params.locale
  const pageContent = getContent(contentSlug, locale);

  if (!pageContent) return notFound(); 
  
  const links = generateHreflang(availableLanguages, "/" + contentSlug); 
  const { meta } = pageContent;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: links[params.locale as typeof availableLanguages[number]],
      languages: links
    },
  };
}

export default function AreasPage({ params }: ContentPageProps) {
  const contentSlug = params.slug[0];
  const locale = params.locale
  const pageContent = getContent(contentSlug, locale);

  if (!pageContent) {
    return notFound();
  }

  return (
    <>
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
