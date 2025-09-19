import { type JSX } from "react";
import type { Doctor } from "../../type/type";
import { TiTick } from "react-icons/ti";
import { GiRotaryPhone, GiRoundStar } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock, LuChrome } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";

export const Information = ({
  drInformation,
}: {
  drInformation: Doctor | undefined;
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
          <GiRoundStar className="text-gray-300 w-3 h-3 absolute" />
          <div className="overflow-hidden w-1/2 h-full absolute">
            <GiRoundStar className="text-alert w-3 h-3" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <GiRoundStar key={`empty-${i}`} className="text-gray-300 w-3 h-3" />
      );
    }

    return stars;
  };
  // Function to return Persian number
  const toPersianDigits = (number: number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .replace(/\d/g, (digit: string) => persianDigits[parseInt(digit)]);
  };
  if (!drInformation) {
    return <div>No doctor information available</div>;
  }
  return (
    <div className="w-full">
      <div className="*:rounded-1.25xl *:bg-white *:border *:border-gray-100 flex flex-col gap-10">
        {/* information doctor */}
        <div>
          <div className="flex gap-4 p-3">
            <div className="image-Gradient  rounded-lg flex justify-center">
              <img
                className="rounded-lg"
                src={drInformation.image}
                alt={drInformation.name}
              />
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-4">
                <h5 className=" font-medium text-Body-L text-black">
                  دکتر {drInformation.name}
                </h5>
                <p className="text-Body-M text-gray-950">
                  {drInformation.specialization}
                </p>
                <div className="flex items-center">
                  {/* distinction stars */}
                  <div className="flex gap-0.5 text-alert items-center text-Captions-L">
                    {renderStars(drInformation.distinction)}
                    <p>{toPersianDigits(drInformation.distinction)}</p>
                  </div>
                  <p className="text-Captions-L text-gray-400">(۱۰۵ نظر)</p>
                </div>
              </div>
              <div className="flex gap-2 max-lg:hidden">
                <div className=" text-black border-2 border-black rounded-full w-5 h-5 grid items-center justify-center">
                  <TiTick className="" />
                </div>
                <div className="text-Body-M text-black block max-lg:hidden">
                  <p>
                    کد نظام پزشکی: {toPersianDigits(drInformation.doctorNumber)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 flex flex-col gap-4 text-XS font-medium text-gray-950">
            <div className="hidden gap-2 max-lg:flex">
              <div className=" text-black border-2 border-black rounded-full w-5 h-5 grid items-center justify-center">
                <TiTick className="" />
              </div>
              <div className="text-Body-M text-black ">
                <p>
                  کد نظام پزشکی: {toPersianDigits(drInformation.doctorNumber)}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationOn className="w-6 h-6" />
              <p>آدرس مطب: {drInformation.address}</p>
            </div>
            <div className="flex gap-2 items-center">
              <LuAlarmClock className="w-6 h-6" />
              <p>اولین نوبت در دسترس: دوشنبه ۲۴ دی</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-100"></div>
          <div className="p-5 flex flex-col gap-4 relative">
            <h4 className="text-black font-medium text-Body-L">
              درباره دکتر {drInformation.name}
            </h4>
            <p className="text-justify text-XL text-gray-600 relative z-10">
              {drInformation.description}
            </p>
          </div>
        </div>
        {/* community dr */}
        <div className="p-5">
          <h4 className=" font-medium text-Body-L text-black pb-6">
            راه های ارتباطی
          </h4>
          <div className="flex  justify-between gap-3 max-xl:flex-wrap *:w-full *:flex *:items-center *:gap-3 *:px-6 *:py-3 *:border *:border-gray--100 *:rounded-1xl *:text-XS *:text-gray--900">
            <div className="">
              <LuChrome className="w-5 h-5" />
              <a href="">{drInformation.linkSite}</a>
            </div>
            <div className="">
              <GiRotaryPhone className="w-5 h-5" />
              <a href="">{drInformation.phoneNumber}</a>
            </div>
            <div className="">
              <FiInstagram className="w-5 h-5" />
              <a href="">{drInformation.linkInstagramAcc}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
