import React from "react";
import ContactForm from "../../modules/contact-form";
import { useTranslations } from "next-intl";

const Contact = () => {

  const contactFormTranslations = useTranslations("contactForm");
  return (
    <div className="w-full bg-[#001F3F] pb-5">
      <div className={"w-full pb-16 text-white"}>
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
          <ContactForm
            btnClassName="w-full sm:w-[352px]"
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
              privacyLink: contactFormTranslations("privacyLink"),
              successMessage: contactFormTranslations("successMessage"),
              errorMessage: contactFormTranslations("errorMessage"),
              submit: contactFormTranslations("downloadReport"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
