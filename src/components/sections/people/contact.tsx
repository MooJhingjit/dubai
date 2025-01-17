import ContactForm from "@/components/modules/contact-form";
import { useTranslations } from "next-intl";
import React from "react";

const Contact = () => {
    const t = useTranslations("people.contact");
  const contactFormTranslations = useTranslations("contactForm");
  return (
    <div className={"w-full py-8 text-white"}>
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-8 text-3xl font-normal text-white font-romain sm:text-5xl">
          {t("title")}
        </h2>
        <ContactForm
          isHideMessage={false}
          textAreaHeight="h-[122px]"
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
            submit: contactFormTranslations("submit")
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
