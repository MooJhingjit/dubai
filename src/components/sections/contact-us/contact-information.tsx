import React from "react";
import Image from "next/image";
import ContactForm from "../../modules/contact-form";
import { useTranslations } from "next-intl";

const ContactInformation = () => {

  const contactFormTranslations = useTranslations("contactForm");


  return (
    <div className="w-full py-12 relative">
      {/* background image */}
      <div className="absolute top-0 w-full h-full">
        <Image
          fill
          src="/dubai/contact/contact-us.png"
          alt="background image"
          className=" w-full h-full object-cover md:object-fill"
        />
      </div>

      {/* contact card */}
      <div className="px-4 mx-auto sm:max-w-7xl md:px-8 xl:px-0 relative">
        <div className="flex flex-wrap lg:flex-nowrap bg-white p-6 rounded-lg">
          {/* contact information */}
          <div className="bg-[#01416F] basis-full lg:basis-1/3 rounded-lg relative">
            <div className="px-10 py-12 text-white flex flex-col h-full">
              <h2 className="text-[28px] mb-12 lg:mb-36">
                Contact Information
              </h2>
              <ul className="space-y-5 lg:space-y-10">
                <li className="flex items-start space-x-4">
                  <Image
                    src="/dubai/icons/phone.png"
                    alt="phone-icon"
                    width={24}
                    height={24}
                  />
                  <a href="">+9714 451 2000</a>
                </li>
                <li className="flex items-start space-x-4">
                  <Image
                    src="/dubai/icons/mail.png"
                    alt="mail-icon"
                    width={24}
                    height={24}
                  />
                  <a href="">contact@knightfrank.com</a>
                </li>
                <li className="flex items-start space-x-4">
                  <Image
                    src="/dubai/icons/pin-map.png"
                    alt="pin-map-icon"
                    width={24}
                    height={24}
                  />
                  <span>
                    39th Floor,Media One Tower Al Falak Street​,Dubai​ Media
                    City​Dubai​ ,487207
                  </span>
                </li>
              </ul>

              <ul className="flex space-x-9 mt-10 lg:mt-auto">
                <li>
                  <Image
                    src="/dubai/facebook-white.png"
                    alt="facebook-icon"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/dubai/ig-white.png"
                    alt="ig-icon"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/dubai/linkedin-white.png"
                    alt="linkedin-icon"
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src="/dubai/youtube-white.png"
                    alt="youtube-icon"
                    width={24}
                    height={24}
                  />
                </li>
              </ul>
            </div>

            <div className="absolute bottom-0 right-0">
              <Image
                src="/dubai/pattern-a.png"
                alt="background-pattern"
                width={184}
                height={184}
                className="h-[184px] w-full"
              />
            </div>
          </div>
          {/* contact form */}
          <div className="basis-full lg:basis-2/3">
            <div className="pt-5">
              <ContactForm
                isHideMessage={false}
                formWrapperClassName="border-none shadow-none px-0 sm:px-0 md:px-0 lg:pl-6 lg:pr-0 lg:py-0"
                btnDisplay="block"
                btnClassName=" w-full sm:w-[352px]"
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
      </div>
      <div className="my-20 flex justify-center relative">
        <Image
          src="/dubai/logo-white-lg.png"
          alt="knight frank logo"
          width={334}
          height={125}
        />
      </div>
    </div>
  );
};

export default ContactInformation;

