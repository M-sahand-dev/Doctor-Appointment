import { useId, useRef, useState, type JSX } from "react";
import { articles } from "../../constant";
import { TitleProduct, SeeAll, Article } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Blog = (): JSX.Element => {
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const limitedArticles = articles.slice(0, 6);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <article>
      <div className="">
        <div className="flex items-center justify-between mb-6">
          <TitleProduct text="">آخرین مقالات</TitleProduct>
          <SeeAll href="" />
        </div>
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            onSlideChange={handleSlideChange}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
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
            {limitedArticles.map((article) => (
              <SwiperSlide key={article.id + id}>
                <Article key={id + article.id} {...article} />
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
      </div>
    </article>
  );
};
