import Link from "next/link";
import React from 'react'
import Image from 'next/image'
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <section className="h-[80px] bg-[#001F3F] flex items-center relative z-20">
    <nav className="flex-1 w-full py-2 text-white ">
      <div className="max-w-md px-4 mx-auto sm:max-w-7xl sm:px-6 xl:px-0">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center w-auto flex-0">
            <Link className="inline-block relative h-[42px] w-[116px]" href="/">
              <Image
                src="/dubai/logo-white.png"
                alt="Knight Frank"
                priority
                fill
              />
            </Link>

          </div>
          <div className="flex-1 hidden px-20 lg:block">
            <Navigation />
          </div>
          <div className="flex items-center w-auto flex-0">

            <div className="flex space-x-3">
              <div className="lg:hidden">
                {/* <MobileNavigation
                  translations={{
                    areas: {
                      Title: "Areas",
                    },
                    properties: {
                      Title: "Properties",
                    },
                    about: {
                      Title: "About",
                    },

                  }}
                /> */}
              </div>

              <div className="hidden lg:flex ">

                <Image
                  src="/dubai/text-logo.png"
                  alt="Knight Frank"
                  width={106}
                  height={37}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section >
  )
}

export default Navbar