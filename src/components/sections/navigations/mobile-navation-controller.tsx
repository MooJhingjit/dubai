"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

type Props = {
  slugs: {
    palmJumeirah: string;
    dubaiHillsEstate: string;
    emiratesHills: string;
    jumeirahBayIslands: string;
    dubaiIslands: string;
    downtownDubai: string;
  };
  translations: {
    palmJumeirah: string;
    dubaiHillsEstate: string;
    emiratesHills: string;
    jumeirahBayIslands: string;
    dubaiIslands: string;
    downtownDubai: string;
    home: string;
    areas: string;
    properties: string;
    about: string;
    people: string;
    contactUs: string;
  };
};
export function MobileNavigationController(props: Props) {
  const { translations, slugs } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const closeSheet = () => setIsOpen(false);

  const slugsArray = Object.keys(slugs) as Array<keyof typeof slugs>;

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="flex items-center"
        >
          {/* <AlignJustify className="text-white" /> */}
          <Image
            src="/dubai/hamburger-menu.png"
            alt="open"
            width={40}
            height={40}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        className=" bg-[#254D78] border-none  w-screen !max-w-none"
        hideClose
      >
        <div className="absolute top-6 right-4">
          <SheetClose>
            <Button
              variant="link"
              size="icon"
            >
              <Image
                src="/dubai/hamburger-menu-close.png"
                alt="close"
                width={40}
                height={40}
              />
            </Button>
          </SheetClose>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <ul className="text-center space-y-10 font-poppins text-[#F7F9FC]">
            <li>
              {/* FFA500 active */}
              <Link
                href="/"
                onClick={closeSheet}
              >
                {translations.home}
              </Link>
            </li>
            <li>
              {/* <Link
                href="/dubai/areas"
                className="text-[#F7F9FC]"
                onClick={closeSheet}
              >
                Areas
              </Link> */}
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem
                  value="item-1"
                  className="border-none text-[#F7F9FC]"
                >
                  <AccordionTrigger className="hover:no-underline justify-center space-x-2 [&>svg]:text-[#F7F9FC]">
                    <Link
                      href="/areas"
                      onClick={closeSheet}
                    >
                      {translations.areas}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col space-y-7 py-4">
                    {slugsArray?.map((slug) => (
                      <Link
                        key={slug}
                        href={`/areas/${slugs[slug]}`}
                        onClick={closeSheet}
                      >
                        {translations[slug]}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
            <li>
              <Link
                href="/"
                onClick={closeSheet}
              >
                {translations.properties}
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={closeSheet}
              >
                {translations.about}
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                onClick={closeSheet}
              >
                {translations.contactUs}
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigationController;
