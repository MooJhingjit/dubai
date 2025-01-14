import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  isHideMessage?: boolean;
  formWrapperClassName?: string;
  btnText?: string;
  btnDisplay?: "inline" | "block";
  btnClassName?: string;
  translations: {
    nameLabel: string;
    namePlaceholder: string;
    lastNameLabel: string;
    lastNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailOptional: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    termsText: string;
    termsLink: string;
    and: string;
    privacyLink: string;
  };
};
const ContactForm = (props: Props) => {
  const {
    isHideMessage = true,
    formWrapperClassName,
    btnText = "Submit",
    btnDisplay = "inline",
    btnClassName,
    translations
  } = props;

  return (
    <div
      className={cn(
        "bg-white text-black rounded-lg shadow-md px-6 sm:px-10 md:px-[72px] py-7 mx-auto font-poppins",
        formWrapperClassName
      )}
    >
      <form className="">
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
          <div>
            <label className="block mb-3 font-medium text-left">{translations.nameLabel}</label>
            <input
              type="text"
              placeholder={translations.namePlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.lastNameLabel}
            </label>
            <input
              type="text"
              placeholder={translations.lastNamePlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.phoneLabel}
            </label>
            <input
              type="text"
              placeholder={translations.phonePlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.emailLabel}{" "}
              <span className="font-normal text-gray-600">{translations.emailOptional}</span>
            </label>
            <input
              type="text"
              placeholder={translations.emailPlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          {!isHideMessage && (
            <div className="col-span-2">
              <label className="block mb-3 font-medium text-left">
                {translations.messageLabel}
              </label>
              <textarea
                placeholder={translations.messagePlaceholder}
                rows={5}
                className="w-full p-4 text-sm border border-gray-400 rounded-sm shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center mt-9 md:gap-0">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
            />
            <label
              htmlFor="terms"
              className="font-suisse  ml-2  text-[#009BDC] text-sm sm:text-base"
            >
              {translations.termsText}{" "}
              <a
                href="#"
                className="underline "
              >
                {translations.termsLink}
              </a>{" "}
              {translations.and}{" "}
              <a
                href="#"
                className="underline "
              >
                {translations.privacyLink}
              </a>
            </label>
          </div>

          {btnDisplay === "inline" && <ContactFormButton text={btnText}  className={btnClassName}/>}
        </div>
        {btnDisplay === "block" && (
          <div className="flex justify-start mt-8">
            <ContactFormButton text={btnText}  className={btnClassName}/>
          </div>
        )}

      </form>
    </div>
  );
};

export default ContactForm;

type ContactFormButtonProps = {
  text: string;
  className?: string;
};
const ContactFormButton = (props: ContactFormButtonProps) => {
  const { text, className } = props;
  return (
    <button
      className={cn(
        "font-suisse bg-[#009BDC] text-xl text-[#F7F9FC] py-3 px-8 rounded-full shadow-md",
        className
      )}
    >
      {text}
    </button>
  );
};
