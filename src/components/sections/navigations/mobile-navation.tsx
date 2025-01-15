"use client";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeSheet = () => setIsOpen(false);

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
          <ul className="text-center space-y-10 font-poppins">
            <li>
              {/* FFA500 active */}
              <Link
                href="/dubai"
                className="text-[#F7F9FC] "
                onClick={closeSheet}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dubai/areas"
                className="text-[#F7F9FC]"
                onClick={closeSheet}
              >
                Areas
              </Link>
            </li>
            <li>
              <Link
                href="/dubai"
                className="text-[#F7F9FC]"
                onClick={closeSheet}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/dubai/about-us"
                className="text-[#F7F9FC]"
                onClick={closeSheet}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/dubai/contact-us"
                className="text-[#F7F9FC]"
                onClick={closeSheet}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );

  // <Sheet
  //   open={isOpen}
  //   onOpenChange={setIsOpen}
  // >
  //   <SheetTrigger asChild>
  //     <Button
  //       variant="link"
  //       size="icon"
  //     >
  //       <AlignJustify className="text-white" />
  //     </Button>
  //   </SheetTrigger>
  //   <SheetContent className="z-[150]">
  {
    /* <Accordion type="multiple" className="w-full" defaultValue={[]}>
        <AccordionItem value="Services" className="py-4">
          <AccordionTrigger className="font-semibold">
            {translations.ourServices.trigger}
          </AccordionTrigger>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/airport-transfers"
              title={translations.ourServices.airportTransfers.Title}
            >
              {translations.ourServices.airportTransfers.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/hourly-charters"
              title={translations.ourServices.hourlyCharters.Title}
            >
              {translations.ourServices.hourlyCharters.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/private-tours"
              title={translations.ourServices.privateTours.Title}
            >
              {translations.ourServices.privateTours.Title}
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Business" className="py-4">
          <AccordionTrigger className="font-semibold">
            {translations.forBusiness.trigger}
          </AccordionTrigger>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/corporations"
              title={translations.forBusiness.corporations.Title}
            >
              {translations.forBusiness.corporations.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/fleet-management"
              title={translations.forBusiness.eventsFleetManagement.Title}
            >
              {translations.forBusiness.eventsFleetManagement.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/strategic-partners"
              title={translations.forBusiness.strategicPartners.Title}
            >
              {translations.forBusiness.strategicPartners.Title}
            </Link>
          </AccordionContent>
          <AccordionContent className="ml-4">
            <Link
              onClick={closeSheet}
              href="/travel-agencies"
              title={translations.forBusiness.travelAgencies.Title}
            >
              {translations.forBusiness.travelAgencies.Title}
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */
  }
  //     <Link
  //       onClick={closeSheet}
  //       href="/areas"
  //       title={translations.areas.Title}
  //       className="py-6 border-b block text-sm font-semibold"
  //     >
  //       {translations.areas.Title}
  //     </Link>
  //     <Link
  //       onClick={closeSheet}
  //       href="/properties"
  //       title={translations.properties.Title}
  //       className="py-6 border-b block text-sm font-semibold"
  //     >
  //       {translations.properties.Title}
  //     </Link>
  //     <Link
  //       onClick={closeSheet}
  //       href="/about"
  //       title={translations.about.Title}
  //       className="py-6 border-b block text-sm font-semibold"
  //     >
  //       {translations.about.Title}
  //     </Link>
  //     <Link
  //       onClick={closeSheet}
  //       href="/contact"
  //       title={translations.about.Title}
  //       className="py-6 border-b block text-sm font-semibold"
  //     >
  //       Contact Us
  //     </Link>
  //     <div className="flex items-center justify-start py-10">
  //       <div className="flex space-x-8"></div>
  //     </div>
  //   </SheetContent>
  // </Sheet>
}

export default MobileNavigation;
