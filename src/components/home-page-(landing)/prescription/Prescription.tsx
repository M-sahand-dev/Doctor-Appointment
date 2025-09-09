import type { JSX } from "react";
import {} from "../../index";
import { Link } from "react-router-dom";

export const Prescription = (): JSX.Element => {
  return (
    <section className="my-8">
      <div className="flex max-lg:flex-col-reverse w-full items-center justify-between border  border-gray--100 rounded-2xl">
        <div className=" p-8 flex flex-col gap-12 justify-between">
          <div className="flex flex-col gap-2 relative">
            <h1 className="font-medium text-4xl text-gray--800 relative z-10">
              همین حالا رایگان تست سلامت بگیرید!
            </h1>
            <p className="text-Body-L text-gray--600 relative z-10">
              در کمتر از دو دقیقه سلامت خود را ارزیابی کنید
            </p>
            <div className="absolute top-0 z-0">
              <img src="/public/image/prescription/Topology-1.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between relative">
            <Link
              to={"/"}
              className="grid place-items-center p-3 text-white text-Body-L rounded-1xl bg-blue--500 h-14">
              شروع تست سلامت
            </Link>
            <div className=" ">
              <img
                src="/public/image/prescription/Ornament 29.png"
                alt=""
                className=" opacity-70"
              />
            </div>
          </div>
        </div>
        <img
          src="/public/image/prescription/prescription .png"
          alt="prescription"
          className=" max-lg:w-full max-lg:rounded-2xl h-full"
        />
      </div>
    </section>
  );
};
