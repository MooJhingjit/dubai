import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations("navigation");

  return (
    <div className="flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList className="gap-12 xl:gap-24">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-1">
              <Link
                href="/areas"
                legacyBehavior
                passHref
              >
                {t("areas")}
              </Link>
              <ChevronDown className="w-4 h-4" />
            </NavigationMenuTrigger>
            {/* <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4 md:grid-cols-1">
                <NavigationItem href="/a" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/b" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/c" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
                <NavigationItem href="/d" title="Lorem Ipsum">
                  Description for ??????
                </NavigationItem>
              </ul>
            </NavigationMenuContent> */}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/properties"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink>{t("properties")}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/about-us"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink>{t("about")}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/people"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink>{t("people")}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="/contact-us" className="bg-white text-[#1E1E1E] py-1.5 px-6 rounded-full shadow-md h-[44px] flex items-center">
        {t("contact")}
      </Link>
    </div>
  );
};

export default Navigation;
