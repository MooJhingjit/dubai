import Link from "next/link";
import React from "react";
import CardAreaGrid from "../../modules/cards/card-area-grid";

type TopAreaProps = {
  image: string;
  name: string;
  slug: string;
};

type Props = {
  topAreas: TopAreaProps[];
};
const TopAreas = (props: Props) => {
  const { topAreas } = props;

  return (
    <div className="w-full py-10 text-white bg-white md:pt-12">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-7xl md:px-8 xl:px-0">
        <h2 className="mb-8 text-3xl text-[#004170] font-romain sm:text-5xl">
          Top investment areas in Dubai
        </h2>

        <div className="grid gap-x-5 gap-y-10 gird-cols-1 sm:grid-cols-3">
          {topAreas.map((topArea) => (
            <Link
              key={topArea.name}
              href={`/dubai/areas/${topArea.slug}`}
            >
              <CardAreaGrid
                image={topArea.image}
                name={topArea.name}
                title="Exclusive investment properties in"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAreas;
