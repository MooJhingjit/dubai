"use client";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../../modules/SwiperSlider";
import CardArea from "../../modules/Cards/CardArea";

const data = [
  {
    name: "Palm Jumeirah",
    image: "/dubai/invest-1.png"
  },
  {
    name: "Dubai Island",
    image: "/dubai/invest-2.png"
  },
  {
    name: "Emirates Hills",
    image: "/dubai/invest-3.png"
  },
  {
    name: "dubai marina",
    image: "/dubai/invest-4.png"
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
