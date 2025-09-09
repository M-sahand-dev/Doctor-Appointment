import type { JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";

export const BoxInformation = ({
  id,
  image,
  name,
  specialization,
  city,
  distinction,
}: {
  id: number;
  image: string;
  name: string;
  specialization: string;
  city: string;
  distinction: number;
}): JSX.Element => {
  return (
    <Link to={`/`} id={id + name} className="">
      <aside className="w-full h-full rounded-1.25xl bg-white border border-gray--100">
        <div className="image-Gradient  rounded-t-1.25xl flex justify-center">
          <img className=" rounded-t-1.25xl" src={image} alt={name} />
        </div>
        <div className="flex flex-col py-4 px-5 gap-2 *:flex  *:items-center">
          <div className="justify-between">
            <h5 className=" font-medium text-base text-center">دکتر {name}</h5>
            <div className="flex items-center gap-1 ">
              <div className="text-alert flex items-center gap-0.5 text-XL">
                <GiRoundStar />
                <span className="">{distinction.toLocaleString("fa-IR")}</span>
              </div>
              <span className="text-gray--400 text-Captions-L">(۱۰۵ نظر)</span>
            </div>
          </div>
          <div className="text-gray--500 justify-between">
            <span className="text-XS">{specialization}</span>
            <div className="flex items-center gap-0.5 text-Captions-L">
              <CiLocationOn />
              <span>{city}</span>
            </div>
          </div>
          <Link
            to={"/"}
            className=" mt-4 justify-center p-2.5 text-blue--600 border border-blue--500 rounded-1xl hover:border-blue--600 hover:bg-galsses hover:text-blue--700 ">
            دریافت نوبت
          </Link>
        </div>
      </aside>
    </Link>
  );
};
