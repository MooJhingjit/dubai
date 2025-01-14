import ContactForm from '@/components/modules/contact-form';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Contact(props: {
    title?: string;
    subTitle?: string;
}) {
    const contactFormTranslations = useTranslations("contactForm");


    return (
            <ContactForm
                title={props.title}
                subTitle={props.subTitle}
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
    )
}
