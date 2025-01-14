import ContactForm from '@/components/modules/contact-form';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Contact() {
  const t = useTranslations("home.contact");
  const contactFormTranslations = useTranslations("contactForm");

  return (
    <div className={"w-full py-8 pb-16 text-white md:pt-4"}>
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-8 text-3xl font-normal text-white font-romain sm:text-5xl">
          {t("title")}
        </h2>
        <p className="font-suisse text-lg sm:text-[28px] mb-12 text-[#FFB944]">
          {t("subTitle")}
        </p>
        <ContactForm
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
  );
}
