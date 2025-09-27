import type { JSX } from "react";
import { Footer, Header } from "../index";
import { PiPlusCircleBold } from "react-icons/pi";

export const UserPanel = (): JSX.Element => {
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
        <div className="w-full">
          <h2 className="text-2xl font-medium text-gray--900 my-6">
            پروفایل کاربری
          </h2>
        </div>
        <main className=" w-full relative">
          <div className="px-6 flex gap-8 max-lg:flex-col">
            <div className="w-80 max-lg:w-full">
              <div className="p-4 border border-gray--100 rounded-1.5 flex flex-col gap-4 items-center">
                <img
                  src={`/image/genderProfileUser/boy.png`}
                  alt="name"
                  className="w-48 h-48 rounded-full"
                />
                <button
                  type="button"
                  className="flex p-2.5 border w-full text-blue-500 justify-center rounded-1xl text-XS font-medium border-blue--500 items-center gap-1.5">
                  آپلود تصویر
                  <PiPlusCircleBold />
                </button>
              </div>
            </div>
            <div className="p-8 border border-gray--100 rounded-1.5 w-full flex flex-col gap-10">
              <div className="*:flex *:gap-1 grid grid-cols-2  grid-rows-4 max-md:grid-cols-1 max-md:*:justify-between gap-4">
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    نام:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    مهدی
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    نام خانوادگی:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    لیلایی
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    کد ملی:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    {toPersianDigits(1991402376)}
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    سال تولد:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    1386/08/06
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    جنسیت:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    آقا
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    شهر:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    دزفول
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    شماره موبایل:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    ۰{toPersianDigits(9019467300)}
                  </span>
                </div>
                <div className="">
                  <span className="text-Body-M font-medium text-gray--700">
                    ایمیل:
                  </span>
                  <span className="p-4 text-Body-M font-medium text-gray--950 max-md:p-0">
                    ایمیل خود را وارد کن
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-end ">
                <button
                  type="button"
                  className="p-3 rounded-1xl text-white bg-blue--500 w-36 border-0 max-md:w-full">
                  ویرایش اطلاعات
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
