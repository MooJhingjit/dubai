"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";

type Props = {
  children: React.ReactNode;
} & SwiperProps;
const SwiperSlider = (props: Props) => {
  const { children, ...rest } = props;
  return <Swiper {...rest}>{children}</Swiper>;
};

export default SwiperSlider;
