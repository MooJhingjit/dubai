import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const t = useTranslations("navigation");
  const tLocation = useTranslations("area.pages");

  const areas = [
    {
      slug: tLocation("palm-jumeirah.slug"),
      name: tLocation("palm-jumeirah.name")
    },
    {
      slug: tLocation("dubai-hills-estate.slug"),
      name: tLocation("dubai-hills-estate.name")
    },
    {
      slug: tLocation("emirates-hills.slug"),
      name: tLocation("emirates-hills.name")
    },
    {
      slug: tLocation("jumeirah-bay-islands.slug"),
      name: tLocation("jumeirah-bay-islands.name")
    },
    {
      slug: tLocation("dubai-islands.slug"),
      name: tLocation("dubai-islands.name")
    },
    {
      slug: tLocation("dubai-downtown.slug"),
      name: tLocation("dubai-downtown.name")
    }
  ];

  return (
    <div className="flex items-center justify-between relative z-40">
      <NavigationMenu viewportClassName="border-none rounded-3xl -translate-x-1/2 mt-8 left-5 bg-[#004170] shadow-lg">
        <NavigationMenuList className="gap-12 xl:gap-24">
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger
              className=" 
            bg-transparent hover:bg-transparent text-white hover:text-white focus:bg-transparent focus:text-white
            data-[active]:bg-transparent data-[state=open]:bg-transparent text-base p-0 
  [&>svg]:size-4
            "
            >
              {t("areas")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#004170]/80 text-white">
              <ul className="w-[350px] text-center font-suisse space-y-4">
                {areas.map((area) => (
                  <ListItem
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    title={area.name}
                  />
                ))}
                <ListItem
                  href="/areas/"
                  title={`${t("seeAllAreas")} >`}
                  className="!text-[#FFB944]"
                />
              </ul>
            </NavigationMenuContent>
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
      <Link
        href="/contact-us"
        className="bg-white text-[#1E1E1E] py-1.5 px-6 rounded-full shadow-md h-[44px] flex items-center"
      >
        {t("contact")}
      </Link>
    </div>
  );
};

export default Navigation;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href as string}
          className={cn(
            " block select-none rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-[#F7F9FC] hover:text-[#004170] focus:bg-[#F7F9FC] focus:text-[#004170] text-base",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
