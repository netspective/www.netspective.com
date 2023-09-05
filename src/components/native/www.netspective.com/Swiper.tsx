import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function MySwiper({ "data-images": dataImages }) {
  // Use dataImages in your component

  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    // Use dataImages here to render your Swiper slides dynamically
  }, [dataImages]);

  // Rest of your Swiper component code

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover w-full sm:w-36 h-44 m-1"
              src={`/assets-natural/brand/www.netspective.com/ip/${image.url}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}