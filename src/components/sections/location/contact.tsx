import React from "react";
import Image from "next/image";
import ContactForm from "../../modules/contact-form";
import { useTranslations } from "next-intl";

type Props = {
  locationName: string;
};
const Contact = (props: Props) => {
  const { locationName } = props;
  const t = useTranslations("area.pageSection.contact");
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
            {t.rich("title", {
              locationName,
              br: () => <br />
            })}
          </h2>
          <p className="font-suisse text-lg sm:text-[32px] mb-5 text-[#F7F9FC] !leading-[45px]">
            {t("subTitle")}
          </p>
        </div>

        <div className="max-w-[650px] relative">
          <ContactForm
            btnDisplay="block"
            btnClassName="w-[352px]"
            formWrapperClassName="!p-10"
            isFullInput
            translations={{
              nameLabel: contactFormTranslations("nameLabel"),
              namePlaceholder: contactFormTranslations("namePlaceholder"),
              lastNameLabel: contactFormTranslations("lastNameLabel"),
              lastNamePlaceholder: contactFormTranslations(
                "lastNamePlaceholder"
              ),
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
              privacyLink: contactFormTranslations("privacyLink"),
              successMessage: contactFormTranslations("successMessage"),
              errorMessage: contactFormTranslations("errorMessage"),
              submit: contactFormTranslations("downloadReport")
            }}
            locationName={locationName}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
