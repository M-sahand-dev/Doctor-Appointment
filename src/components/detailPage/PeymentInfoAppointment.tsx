import type { JSX } from "react";
import type { Doctor } from "../../type/type";
import { GiRoundStar } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

export const PeymentInfoAppointment = ({
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
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className=" px-5 py-2 bg-red--50 rounded-3xl opacity-80 text-Body-S text-gray--600 max-lg:text-XL max-sm:text-Captions-L ">
        <ul className="pr-5 list-disc">
          <li className="">
            نوبت شما هنوز تکمیل نشده است، برای ادامه پرداخت را انجام دهید.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 *:p-5 *:bg-white *:border *:border-gray--100 *:rounded-1.5 *:flex *:flex-col *:gap-4">
        <div className="">
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
                    {drInformation && renderStars(drInformation.distinction)}
                    <p>
                      {drInformation &&
                        toPersianDigits(drInformation.distinction)}
                    </p>
                  </div>
                  <p className="text-Captions-L text-gray-400">(۱۰۵ نظر)</p>
                </div>
              </div>
              <div className="flex gap-2 max-lg:hidden">
                <div className="  border-2 text-gray--700 border-gray--700 rounded-full w-5 h-5 grid items-center justify-center">
                  <TiTick className="" />
                </div>
                <div className="text-XL max-lg:hidden">
                  <p className="flex items-center gap-0.5">
                    <p className="text-gray--500">کد نظام پزشکی: </p>
                    <div className="text-gray--700">
                      {drInformation &&
                        toPersianDigits(drInformation.doctorNumber)}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden gap-2 max-lg:flex">
            <div className="  border-2 text-gray--700 border-gray--700 rounded-full w-5 h-5 grid items-center justify-center">
              <TiTick className="" />
            </div>
            <div className="text-XL">
              <p className="flex items-center gap-0.5">
                <p className="text-gray--500">کد نظام پزشکی: </p>
                <div className="text-gray--700">
                  {drInformation && toPersianDigits(drInformation.doctorNumber)}
                </div>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 *:flex *:justify-between *:px-2 *:py-1.5">
            <div className="">
              <span className="text-XS font-medium text-gray--500">
                آدرس مطب:{" "}
              </span>
              <span className="text-XS font-medium text-gray--900">
                {drInformation?.address}
              </span>
            </div>
            <div className="">
              <span className="text-XS font-medium text-gray--500">
                نوع نوبت:
              </span>
              <span className="text-XS font-medium text-gray--900">حضوری</span>
            </div>
            <div className="">
              <span className="text-XS font-medium text-gray--500">
                زمان نوبت:
              </span>
              <span className="text-XS font-medium text-gray--900">
                دوشنبه ۲۴ دی ساعت ۹:۳۰{" "}
              </span>
            </div>
            <div className="">
              <span className="text-XS font-medium text-gray--500">
                مراجعه کننده:
              </span>
              <span className="text-XS font-medium text-gray--900">
                مهدی لیلایی
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-Body-L font-medium text-black">
            با اطمینان نوبت خود را ثبت کنید
          </h4>
          <ul className="flex flex-col gap-4 list-disc pr-5 text-XS text-black">
            <li>امکان لغو نوبت</li>
            <li>امکان بازگشت وجه</li>
            <li>امکان ویرایش نوبت</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
