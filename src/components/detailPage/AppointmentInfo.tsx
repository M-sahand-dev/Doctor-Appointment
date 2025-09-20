import type { JSX } from "react";
import { Footer, Header } from "../index";
import { drsData } from "../../constant";
import { Link, useLocation, useParams } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { GiRoundStar } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { FaChevronLeft, FaPlus } from "react-icons/fa";

export const AppointmentInfo = (): JSX.Element => {
  const location = useLocation();
  const getProduct = (id: number) => {
    return drsData.find((dr) => dr.id === id);
  };
  const params = useParams();
  const drInformation = getProduct(parseInt(String(params.id)));
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

  return (
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <main className=" w-full relative">
          <div className="flex flex-col px-40  max-xl:px-28 max-lg:px-16 max-md:px-8 max-sm:px-4 gap-4">
            <div className="flex items-center gap-2 my-6">
              <Link to={`/detail/${drInformation?.id}${location.search}`}>
                <BsArrowRightCircle className="w-6 h-6" />
              </Link>
              <h1 className="text-H3 font-bold  text-gray--900">
                انتخاب مراجع
              </h1>
            </div>
            <div className="*:rounded-1.25xl *:bg-white *:border *:border-gray-100">
              <div>
                <div className="flex gap-4 p-3">
                  <div className="image-Gradient  rounded-lg flex justify-center">
                    <img
                      className="rounded-lg"
                      src={drInformation?.image}
                      alt={drInformation?.name}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-4">
                      <h5 className=" font-medium text-Body-L text-black">
                        دکتر {drInformation?.name}
                      </h5>
                      <p className="text-Body-M text-gray-950">
                        {drInformation?.specialization}
                      </p>
                      <div className="flex items-center">
                        {/* distinction stars */}
                        <div className="flex gap-0.5 text-alert items-center text-Captions-L">
                          {renderStars(drInformation?.distinction ?? 0)}
                          <p>
                            {toPersianDigits(drInformation?.distinction ?? 0)}
                          </p>
                        </div>
                        <p className="text-Captions-L text-gray-400">
                          (۱۰۵ نظر)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 max-lg:hidden">
                      <div className=" text-black border-2 border-black rounded-full w-5 h-5 grid items-center justify-center">
                        <TiTick className="" />
                      </div>
                      <div className="text-Body-M text-black block max-lg:hidden">
                        <p>
                          کد نظام پزشکی:{" "}
                          {toPersianDigits(drInformation?.doctorNumber ?? 0)}
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
                        کد نظام پزشکی:{" "}
                        {toPersianDigits(drInformation?.doctorNumber ?? 0)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CiLocationOn className="w-6 h-6" />
                    <p>آدرس مطب: {drInformation?.address}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LuAlarmClock className="w-6 h-6" />
                    <p>اولین نوبت در دسترس: دوشنبه ۲۴ دی</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="*:rounded-1.25xl *:bg-white *:border *:border-gray-100">
              <div className="p-4 flex flex-col gap-4">
                <div className="">
                  <h1 className="text-Body-L font-medium text-black">
                    مراجعه کننده
                  </h1>
                  <p className="text-XL text-black">
                    برای چه کسی نوبت میگیرید؟
                  </p>
                </div>
                <div className="*:rounded-1.25xl *:bg-white *:border *:border-gray-100">
                  <div className="px-6 py-4">
                    <div className="flex   gap-2 flex-col">
                      <div className="flex items-center  gap-2">
                        <input type="radio" name="person-acc" id="person-acc" />
                        <label
                          className="text-XS font-medium text-gray--900"
                          htmlFor="person-acc">
                          {" "}
                          مهدی لیلایی(خودم)
                        </label>
                      </div>
                      <p className="text-Captions-M text-gray--700 pr-5">
                        ۰{toPersianDigits(9123456789)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button
                    type="button"
                    className="flex items-center p-2 gap-1 text-blue-500">
                    دریافت نوبت برای شخص دیگر
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <Link
              to={`/`}
              className="p-2.5  rounded-1xl bg-blue--500 grid place-items-center mx-44 max-2xl:mx-36 max-xl:mx-28 max-lg:mx-0">
              <div className="flex text-white items-center gap-1.5">
                ادامه
                <FaChevronLeft />
              </div>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
