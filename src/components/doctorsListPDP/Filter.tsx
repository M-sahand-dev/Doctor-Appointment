import type { JSX } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const Filter = (): JSX.Element => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-white rounded-1xl border border-gray--100 w-96 max-2xl:w-80 max-xl:hidden max-2xl:rounded-none absolute ">
      <div className="flex justify-between items-center">
        <h4 className="flex items-center gap-1 text-Body-L font-medium text-black">
          <CiFilter className="w-6 h-6" />
          فیلترها
        </h4>
        <button className="flex items-center gap-1 text-Body-S font-medium bg-blue--50 rounded-4xl p-2 text-blue--500 cursor-pointer">
          حذف همه فیلترها
          <IoClose className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col py-2 gap-2">
        <div className="flex justify-between items-center text-Body-M font-bold text-gray--500 p-4 rounded-1xl border border-gray--100">
          <input
            type="text"
            placeholder="جستجو پزشک"
            className="w-full outline-hidden"
          />
          <CiSearch className="w-6 h-6" />
        </div>
        <span className="text-Captions-M text-gray--400">
          نام یا تخصص مورد نظرتان را وارد کنید.
        </span>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-px bg-gray--100"></div>
        <div className="">
          <h5 className="font-medium text-Body-L py-4 text-gray--950">
            تخصص ها
          </h5>
          <div className="flex text-gray--500 rounded-1xl border border-gray--100  p-4 justify-between items-center">
            <p>تخصص مورد نظر را انتخاب کنید</p>
            <FaChevronDown />
          </div>
        </div>
        <div className="w-full h-px bg-gray--100 my-4"></div>
        <div className="">
          <h5 className="font-medium text-Body-L pb-4 text-gray--950">بیمه</h5>
          <div className="flex text-gray--500 rounded-1xl border border-gray--100  p-4 justify-between items-center">
            <p>بیمه مورد نظر را انتخاب کنید</p>
            <FaChevronDown />
          </div>
        </div>
        <div className="w-full h-px bg-gray--100 my-4"></div>
        <div className="">
          <h5 className="font-medium text-Body-L pb-4 text-gray--950">
            تجربه کاری{" "}
          </h5>
          <div className="flex text-gray--500 rounded-1xl border border-gray--100  p-4 justify-between items-center">
            <p>۵ سال به بالا</p>
            <FaChevronDown />
          </div>
        </div>
        <div className="w-full h-px bg-gray--100 my-4"></div>
        <div className="">
          <div className="">
            <h5 className="font-medium text-Body-L pb-4 text-gray--950">
              وضعیت نوبت دهی
            </h5>
            <div className="flex text-gray--500 rounded-1xl border border-gray--100  p-4 justify-between items-center">
              <p>وضعیت مورد نظر را انتخاب کنید</p>
              <FaChevronDown />
            </div>
          </div>
          <div className="flex flex-col gap-y-8 gap-x-16 px-4 py-2.5 *:flex *:items-center *:gap-2 text-gray--500">
            <div className="">
              <input type="checkbox" name="" id="" />
              <div className="flex justify-between w-full items-center">
                <p>پزشکان دارای نوبت خالی</p>
                <FaChevronDown />
              </div>
            </div>
            <div className="">
              <input type="checkbox" name="" id="" />
              <p>امکان ویزیت انلاین</p>
            </div>
            <div className="">
              <input type="checkbox" name="" id="" />
              <p>امکان رزرو حضوری</p>
            </div>
          </div>
          <div className="flex text-gray--500 rounded-1xl border border-gray--100  p-4 justify-between items-center py-4">
            <p>شهر</p>
            <FaChevronDown />
          </div>
          <div className="text-gray--500 px-4 py-2.5">
            <div className="flex flex-col gap-2 *:flex *:items-center *:gap-2">
              <div className=" justify-between">
                <p>استان آذربایجان غربی</p>
                <FaChevronDown />
              </div>
              <div className="">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">ارومیه</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray--100 my-4"></div>
        <div className="">
          <h5 className="font-medium text-Body-L pb-4 text-gray--950">
            جنسیت پزشک
          </h5>
          <div className="flex *:flex items-center *:items-center gap-6 *:gap-2 text-gray--500">
            <div className="">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">خانم</label>
            </div>
            <div className="">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">آقا</label>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="p-2.5 grid place-items-center text-white bg-blue--500 rounded-1xl">
        اعمال فیلترها
      </button>
    </div>
  );
};
