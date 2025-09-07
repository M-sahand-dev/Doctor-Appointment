import type { JSX } from "react";
import { RiSearch2Line } from "react-icons/ri";

export const SearchBox = (): JSX.Element => {
  return (
    <div className="bg-[url('/public/image/Doctor_Holding_Stethoscope.webp')]  rounded-2xl bg-no-repeat bg-center bg-cover bg-fixed h-[300px] w-full">
      <div className="bg-galsses w-full h-full rounded-2xl">
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 px-72 py-4 max-2xl:px-60 max-xl:px-48 max-lg:px-36 max-md:px-24 max-sm:px-12">
          <h1 className="text-white 2xl:text-4xl xl:text-3xl lg:text-2xl   font-medium text-center text-H1">
            فقط یک جستجو با بهترین پزشکان فاصله دارید
          </h1>
          <h2 className="text-white font-medium text-center text-H3">
            در کمتر از ۱ دقیقه نوبت خود را رزرو کنید
          </h2>
          <div className="flex justify-between items-center p-4 bg-gray--50 rounded-2xl w-full">
            <input
              type="search"
              className="w-full outline-hidden"
              name=""
              id=""
              placeholder="پزشک یا تخصص مورد نظر خود را جستجو کنید..."
            />
            <button className="text-gray--400">
              <RiSearch2Line className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
