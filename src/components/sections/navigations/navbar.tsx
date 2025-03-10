import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navigation from "./navigation";
import MobileNavigation from "./mobile-navation";

const Navbar = () => {
  return (
    <section className="h-[80px] bg-[#001F3F] flex items-center relative">
      <nav className="flex-1 w-full py-2 text-white ">
        <div className="max-w-md px-4 mx-auto sm:max-w-7xl sm:px-6 xl:px-0">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center w-auto flex-0">
              <Link
                className="inline-block relative h-[42px] w-[116px]"
                href="/"
              >
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
                  <MobileNavigation />
                </div>

                <div className="hidden lg:flex ">
                  <Link href="/about-us">
                    <Image
                      src="/dubai/text-logo.png"
                      alt="Knight Frank"
                      width={106}
                      height={37}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
