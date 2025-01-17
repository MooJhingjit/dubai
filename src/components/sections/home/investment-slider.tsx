"use client";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../../modules/swiper-slider";
import CardArea from "../../modules/cards/card-area";

const data = [
  {
    name: "Palm Jumeirah",
    image: "/dubai/home/invest-1.png"
  },
  {
    name: "Dubai Hills Estate",
    image: "/dubai/home/invest-2.png"
  },
  {
    name: "Emirates Hills",
    image: "/dubai/home/invest-3.png"
  },
  {
    name: "Jumeirah Bay Islands",
    image: "/dubai/home/invest-4.png"
  },
  {
    name: "Dubai Islands",
    image: "/dubai/home/invest-5.png"
  },
  {
    name: "Downtown Dubai",
    image: "/dubai/home/invest-6.png"
  }
];
const InvestmentSlider = () => {
  return (
    <SwiperSlider
      spaceBetween={20}
      // slidesPerView={3.3}
      breakpoints={{
        376: {
          // width: 576,
          slidesPerView: 2.3
        },
        1024: {
          slidesPerView: 3.3
        }
      }}

    >
      {data.map((item) => (
        <SwiperSlide key={item.name}>
          <CardArea
            image={item.image}
            name={item.name}
          />
        </SwiperSlide>
      ))}
    </SwiperSlider>
  );
};

export default InvestmentSlider;
