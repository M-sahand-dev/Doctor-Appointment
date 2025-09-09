import { type JSX, useId, useRef, useState } from "react";
import { TitleProduct, SeeAll, CommentBox } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { commentsUser } from "../../constant";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Comments = (): JSX.Element => {
  const id = useId();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <section className="comments my-8">
      <div className="flex items-center justify-between mb-6">
        <TitleProduct text="">نظرات کاربران</TitleProduct>
        <SeeAll href="" />
      </div>
      <div className=" relative">
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
          {commentsUser.map((user) => (
            <SwiperSlide key={user.id + id}>
              <CommentBox
                id={user.id}
                name={user.name}
                image={user.image}
                distinction={user.distinction}
                date={user.date}
                description={user.description}
                aboutDr={user.aboutDr}
              />
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
