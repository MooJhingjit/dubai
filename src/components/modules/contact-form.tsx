import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title?: string;
  subTitle?: string;
  isHideMessage?: boolean;
  className?: string;
  formWrapperClassName?: string;
  btnText?: string;
  display?: "inline" | "block";
};
const ContactForm = (props: Props) => {
  const {
    title,
    subTitle,
    isHideMessage = true,
    className,
    formWrapperClassName,
    btnText = "Submit",
    display = "inline"
  } = props;
  return (
    <div className={cn("w-full py-8 pb-16 text-white md:pt-4", className)}>
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        {!!title && (
          <h2 className="mb-8 text-3xl font-normal text-white font-romain sm:text-5xl">
            {title}
          </h2>
        )}
        {!!subTitle && (
          <p className="font-suisse text-lg sm:text-[28px] mb-12 text-[#FFB944]">
            {subTitle}
          </p>
        )}
        <div
          className={cn(
            "bg-white text-black rounded-lg shadow-md px-6 sm:px-10 md:px-[72px] py-7 mx-auto font-poppins",
            formWrapperClassName
          )}
        >
          <form className="">
            <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
              <div>
                <label className="block mb-3 font-medium text-left">Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-left">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-left">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block mb-3 font-medium text-left">
                  Email{" "}
                  <span className="font-normal text-gray-600">[optional]</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full border-gray-400 rounded-sm h-[52px] px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              {!isHideMessage && (
                <div className="col-span-2">
                  <label className="block mb-3 font-medium text-left">
                    How can we help you?
                  </label>
                  <textarea
                    placeholder="Enter your Message here."
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
                  I agree with{" "}
                  <a
                    href="#"
                    className="underline "
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="underline "
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              {display === "inline" && <ContactFormButton text={btnText} />}
            </div>
            {display === "block" && (
              <div className="flex justify-start mt-8">
                <ContactFormButton text={btnText} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

type ContactFormButtonProps = {
  text: string;
};
const ContactFormButton = (props: ContactFormButtonProps) => {
  const { text } = props;
  return (
    <button className="font-suisse bg-[#009BDC] text-xl  text-[#F7F9FC] py-3 px-8 rounded-full shadow-md">
      {text}
    </button>
  );
};
