import type { JSX } from "react";
import { GiRoundStar } from "react-icons/gi";
import type { Doctor } from "../../type/type";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BiCommentAdd } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

export const CommentsBox = ({
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
  const maxShowComment = drInformation?.comments?.slice(0, 3) ?? [];
  return (
    <div className="p-5 rounded-1.25xl bg-white border border-gray-100 my-10">
      <h4 className=" font-medium text-Body-L text-black pb-6">
        نظرات کاربران
      </h4>
      <div className="flex justify-between items-center pb-4">
        <div className="flex items-center max-lg:hidden">
          {/* distinction stars */}
          <div className="flex gap-0.5 text-alert items-center">
            {renderStars(drInformation?.distinction ?? 0)}
            <p>{toPersianDigits(drInformation?.distinction ?? 0)}</p>
          </div>
          <p className="text-Captions-L text-gray-400">(۱۰۵ نظر)</p>
        </div>
        <div className="flex items-center gap-1 max-lg:hidden">
          <SlLike className="w-6 h-6 text-green--400" />
          <p className="text-XL text-gray--500">
            {" "}
            ۹۰% مراجعان این پزشک را پیشنهاد داده ‌اند
          </p>
        </div>
        <div className="hidden max-lg:flex flex-col gap-2">
          <div className="flex items-center">
            {/* distinction stars */}
            <div className="flex gap-0.5 text-alert items-center">
              {renderStars(drInformation?.distinction ?? 0)}
              <p>{toPersianDigits(drInformation?.distinction ?? 0)}</p>
            </div>
            <p className="text-Captions-L text-gray-400">(۱۰۵ نظر)</p>
          </div>
          <div className="flex items-center gap-1">
            <SlLike className="w-6 h-6 text-green--400" />
            <p className="text-XL text-gray--500">
              {" "}
              ۹۰% مراجعان این پزشک را پیشنهاد داده ‌اند
            </p>
          </div>
        </div>
        <Link
          to={`/`}
          className="flex items-center gap-1 p-2 rounded-0.75xl border border-blue--500 text-blue--500 cursor-pointer"
          type="button">
          ثبت نظر
          <BiCommentAdd />
        </Link>
      </div>
      <div className="">
        {maxShowComment.map((commnet) => (
          <div
            key={commnet.id + commnet.date}
            className="border-t border-gray--75 p-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={commnet.image}
                  alt={commnet.name}
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <div className="flex w-full justify-between items-center">
                  <h6 className="text-Body-M font-medium text-gray--900 ">
                    {commnet.name}
                  </h6>
                  <span className="text-Captions-M text-gray--400">
                    ({commnet.date})
                  </span>
                </div>
                {/* distinction stars */}
                <div className="flex gap-0.5 text-alert items-center">
                  {renderStars(commnet.distinction)}
                </div>
              </div>
            </div>
            <p className="text-XL text-gray--900">{commnet.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center py-4">
        <button
          type="button"
          className="flex items-center gap-1 text-blue--500 cursor-pointer">
          نظرات بیشتر <FaChevronDown />
        </button>
      </div>
    </div>
  );
};
