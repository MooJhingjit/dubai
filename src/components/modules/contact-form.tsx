"use client";
import { cn } from "@/lib/utils";
import { CheckIcon, CircleXIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  isHideMessage?: boolean;
  formWrapperClassName?: string;
  btnText?: string;
  btnDisplay?: "inline" | "block";
  btnClassName?: string;
  isFullInput?: boolean;
  locationName?: string;
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
    successMessage: string;
    errorMessage: string;
    submit?: string;
  };
};
const ContactForm = (props: Props) => {
  const {
    isHideMessage = true,
    formWrapperClassName,
    btnText = "Submit",
    btnDisplay = "inline",
    btnClassName,
    isFullInput,
    locationName,
    translations
  } = props;

  const btnTextTranslated = translations?.submit || btnText

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setShowSuccess(false);
    setBtnLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let message = "";
    if (locationName) {
      message = `Location: ${locationName}\n${String(
        formData.get("message") ?? ""
      )}`;
    }

    const data = {
      name: formData.get("firstName") + " " + formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      notes: message || formData.get("message")
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      setBtnLoading(false);

      if (!response.ok) {
        setShowError(true);
        return;
      }

      const result = await response.json();
      if (result.success) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    } catch (err) {
      console.log("🚀 ~ handleSubmit ~ err:", err);
      setShowError(true);
      setBtnLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "bg-white text-black rounded-lg shadow-md px-6 sm:px-10 md:px-[72px] py-7 mx-auto font-poppins",
        formWrapperClassName
      )}
    >
      <form
        className=""
        onSubmit={handleSubmit}
      >
        <div
          className={cn(
            isFullInput ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2",
            "grid gap-6 mb-6 "
          )}
        >
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.nameLabel}
            </label>
            <input
              type="text"
              name="firstName"
              placeholder={translations.namePlaceholder}
              required
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.lastNameLabel}
            </label>
            <input
              type="text"
              name="lastName"
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
              name="phone"
              required
              placeholder={translations.phonePlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          <div>
            <label className="block mb-3 font-medium text-left">
              {translations.emailLabel}{" "}
              <span className="font-light text-xs text-gray-600">
                {translations.emailOptional}
              </span>
            </label>
            <input
              type="text"
              name="email"
              placeholder={translations.emailPlaceholder}
              className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
            />
          </div>
          {!isHideMessage && (
            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-3 font-medium text-left">
                {translations.messageLabel}
              </label>
              <textarea
                name="message"
                placeholder={translations.messagePlaceholder}
                rows={5}
                className="w-full p-4 h-[214px] text-sm border border-gray-400 rounded-sm shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          )}
        </div>
        {showSuccess ? (
          <div className="text-green-600 text-start  text-lg flex items-start space-x-1">
            <CheckIcon
              size={20}
              className="mt-1"
            />
            <p>{translations.successMessage}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center mt-9 md:gap-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
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

              {btnDisplay === "inline" && (
                <ContactFormButton
                  text={btnTextTranslated}
                  className={btnClassName}
                />
              )}
            </div>

            {btnDisplay === "block" && (
              <div className="flex justify-start mt-8">
                <ContactFormButton
                  text={btnTextTranslated}
                  loading={btnLoading}
                  className={btnClassName}
                />
              </div>
            )}
            {showError && (
              <div className="text-red-600  text-start text-lg flex items-start space-x-1">
                <CircleXIcon
                  size={20}
                  className="mt-1"
                />
                <p>{translations.errorMessage}</p>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

type ContactFormButtonProps = {
  text: string;
  className?: string;
  loading?: boolean;
};
const ContactFormButton = (props: ContactFormButtonProps) => {
  const { text, className, loading } = props;
  return (
    <button
      className={cn(
        loading
          ? "cursor-not-allowed bg-gray-400 text-white text-xl py-3 px-8 rounded-full shadow-md"
          : "font-suisse bg-[#009BDC] text-xl text-[#F7F9FC] py-3 px-8 rounded-full shadow-md",
        className
      )}
    >
      {text}
    </button>
  );
};
