import { type JSX, useId, useRef, useState } from "react";
import { TitleProduct, SeeAll, BoxInformation } from "../../index";
import { drsData } from "../../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const NewDr = (): JSX.Element => {
  const id = useId();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="">
      <div className="flex items-center justify-between mb-6">
        <TitleProduct text="">جدیدترین پزشک‌ها</TitleProduct>
        <SeeAll href="" />
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          onSlideChange={handleSlideChange}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.activeIndex);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}>
          {drsData.map((item, index) => (
            <SwiperSlide key={item.id + id}>
              <div
                className={`transition-all duration-300 ${
                  activeIndex === index ? "scale-105" : "scale-100"
                }`}>
                <BoxInformation
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  specialization={item.specialization}
                  city={item.city}
                  distinction={item.distinction}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className={`custom-swiper-button-next absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-100 transition-all duration-300  ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className={`custom-swiper-button-prev absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-50 text-gray-500 rounded-full hover:bg-gray-100 transition-all duration-300  ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};
