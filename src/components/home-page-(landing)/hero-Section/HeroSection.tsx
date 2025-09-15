import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Benefits, SearchBox } from "../../index";

export const HeroSection = (): JSX.Element => {
  // Hero Section (Section 1) responsive design
  return (
    <section className="hero-section">
      <div className="flex items-center justify-between max-lg:flex-col-reverse max-lg:gap-3.5">
        <div className="flex flex-col gap-8 max-lg:text-center">
          <div className="">
            <h1 className="text-black font-bold text-5xl max-lg:text-3xl">
              سلامت شما، رسالت ما
            </h1>
            <p className="text-H3 text-gray--600 flex flex-col gap-2 mt-4">
              <span>بهترین پزشکان در دسترس شما،</span>
              <span> نوبت‌دهی آنلاین مطمئن فقط با چند کلیک.</span>
            </p>
          </div>
          <div className="">
            <div className="flex gap-4 *:grid *:place-items-center *:py-4 *:px-12 *:rounded-1xl max-lg:items-center max-lg:justify-center">
              <Link
                to={"/"}
                className="bg-blue--500 text-white hover:bg-blue--600">
                رزرو نوبت
              </Link>
              <Link
                to={"/"}
                className="text-gray--400 border border-gray--100 hover:bg-gray--50">
                پشتیبانی
              </Link>
            </div>
          </div>
        </div>
        <img
          src={"/image/hospital-people.png"}
          alt="hospital-people"
          className="max-2xl:w-[650px] max-xl:w-[500px] max-lg:w-full"
        />
      </div>
      <div className="mt-6">
        <Benefits />
      </div>
      <Link to={"/doctorList"} className="mt-6">
        <SearchBox />
      </Link>
    </section>
  );
};
