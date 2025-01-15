import React from "react";
import Image from "next/image";
import ContactForm from "../../modules/contact-form";
import { useTranslations } from "next-intl";

type Props = {
  locationName: string
};
const Contact = (props: Props) => {

  const {locationName} = props;
  const contactFormTranslations = useTranslations("contactForm");
  return (
    <div className="w-full pt-14 pb-32 relative">
      <div className="absolute top-0 right-0">
        <Image
          width={773}
          height={931}
          src="/dubai/book-2.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-md px-4 mx-auto sm:max-w-7xl md:px-8 xl:px-0">
        <div className="relative">
          <h2 className="mb-5 text-3xl text-[#FFB944] font-romain sm:text-5xl !leading-[64px]">
            Everything you need to know
            <br />
            about buying property in {locationName}.
          </h2>
          <p className="font-suisse text-lg sm:text-[32px] mb-5 text-[#F7F9FC] !leading-[45px]">
            Get access to exclusive investment opportunities before they hit the
            market
          </p>
        </div>

        <div className="max-w-[650px] relative">
          <ContactForm
            btnText="Download your free report"
            btnDisplay="block"
            btnClassName="w-[352px]"
            formWrapperClassName="!p-10"
            isFullInput
            translations={{
              nameLabel: contactFormTranslations("nameLabel"),
              namePlaceholder: contactFormTranslations("namePlaceholder"),
              lastNameLabel: contactFormTranslations("lastNameLabel"),
              lastNamePlaceholder: contactFormTranslations("lastNamePlaceholder"),
              phoneLabel: contactFormTranslations("phoneLabel"),
              phonePlaceholder: contactFormTranslations("phonePlaceholder"),
              emailLabel: contactFormTranslations("emailLabel"),
              emailOptional: contactFormTranslations("emailOptional"),
              emailPlaceholder: contactFormTranslations("emailPlaceholder"),
              messageLabel: contactFormTranslations("messageLabel"),
              messagePlaceholder: contactFormTranslations("messagePlaceholder"),
              termsText: contactFormTranslations("termsText"),
              termsLink: contactFormTranslations("termsLink"),
              and: contactFormTranslations("and"),
              privacyLink: contactFormTranslations("privacyLink")

            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
