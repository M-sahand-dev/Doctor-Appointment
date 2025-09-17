import type { JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
import { LuAlarmClock } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export const BoxDoctor = ({
  id,
  image,
  name,
  specialization,
  distinction,
  doctorNumber,
  address,
}: {
  id: number;
  image: string;
  name: string;
  specialization: string;
  distinction: number;
  doctorNumber: number;
  address: string;
}): JSX.Element => {
  // Function to render stars based on distinction rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <GiRoundStar key={`full-${i}`} className="text-alert w-3 h-3" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3 h-3">
          <GiRoundStar className="text-gray--300 w-3 h-3 absolute" />
          <div className="overflow-hidden w-1/2 h-full absolute">
            <GiRoundStar className="text-alert w-3 h-3" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <GiRoundStar key={`empty-${i}`} className="text-gray--300 w-3 h-3" />
      );
    }

    return stars;
  };
  // Function to return pertion number
  const toPersianDigits = (number: number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .replace(/\d/g, (digit: string) => persianDigits[parseInt(digit)]);
  };
  return (
    <aside className="px-6 py-4 border border-gray-100 rounded-lg">
      <div className="flex gap-4">
        <div className="image-Gradient  rounded-lg flex justify-center">
          <img className="rounded-lg" src={image} alt={name} />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4">
            <h5 className=" font-medium text-Body-L text-black">دکتر {name}</h5>
            <p className="text-Body-M text-gray--950">{specialization}</p>
            <div className="flex items-center">
              {/* distinction stars */}
              <div className="flex gap-0.5 text-alert items-center text-Captions-L">
                {renderStars(distinction)}
                <p>{toPersianDigits(distinction)}</p>
              </div>
              <p className="text-Captions-L text-gray-400">(۱۰۵ نظر)</p>
            </div>
          </div>
          <div className="flex gap-2 max-lg:hidden">
            <div className=" text-black border-2 border-black rounded-full w-5 h-5 grid items-center justify-center">
              <TiTick className="" />
            </div>
            <div className="text-Body-M text-black block max-lg:hidden">
              <p>کد نظام پزشکی: {toPersianDigits(doctorNumber)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray--100"></div>
      <div className="py-4 flex flex-col gap-4 text-XS font-medium text-gray--950">
        <div className="hidden gap-2 max-lg:flex">
          <div className=" text-black border-2 border-black rounded-full w-5 h-5 grid items-center justify-center">
            <TiTick className="" />
          </div>
          <div className="text-Body-M text-black ">
            <p>کد نظام پزشکی: {toPersianDigits(doctorNumber)}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <CiLocationOn className="w-6 h-6" />
          <p>آدرس مطب: {address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <LuAlarmClock className="w-6 h-6" />
          <p>اولین نوبت در دسترس: دوشنبه ۲۴ دی</p>
        </div>
      </div>
      <div className="w-full flex max-lg:flex-wrap max-lg:*:w-full *:w-[330px] text-XS *:flex *:items-center *:justify-center *:gap-1  *:p-2.5 *:rounded-1xl justify-center items-center gap-8 max-lg:gap-4">
        <button type="button" className="bg-blue--500 text-white">
          رزرو نوبت <FaChevronLeft />
        </button>
        <Link
          to={`/detail/${id}/${location.search}`}
          className="text-gray--400 border border-gray--100">
          مشاهده پروفایل
        </Link>
      </div>
    </aside>
  );
};
