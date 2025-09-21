import type { JSX } from "react";
import { Header } from "../index.ts";
// import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MdOutlineError } from "react-icons/md";

export const SuccessErrorPay = (): JSX.Element => {
  // this component for test success or error payment❗❗
  // for test ❗❗
  return (
    <div className="">
      <Header />
      <div className="h-screen w-full grid place-items-center">
        <div className="border border-gray--100  rounded-1xl p-5 flex flex-col gap-4 items-center">
          <div
            // className="bg-green--200 p-4 rounded-1.5"
            className="bg-red--200 p-4 rounded-1.5">
            <div
              //   className="text-white bg-green--600 p-2 rounded-full"
              className="text-red--400">
              {/* <TiTick className="w-6 h-6" /> */}
              <MdOutlineError className="w-6 h-6" />
            </div>
          </div>
          <div className="text-center px-32 flex flex-col gap-4 max-sm:p-8">
            <h6 className="text-Body-M font-bold text-black">
              {/* تراکنش موفق */}
              پرداخت نامشخص
            </h6>
            <p className="text-gray--400 text-Body-S">
              {/* نوبت شما با موفقیت رزرو شد */}
              متاسفانه تراکنش شما با مشکل مواجه شد
            </p>
          </div>
          {/* <Link
            to={`/`}
            className="grid place-items-center text-blue--500 text-XS">
            مشاهده نوبت‌ها
          </Link> */}
          <div className="flex gap-4 *:grid *:place-items-center *:w-full *:p-2.5 *:rounded-1xl *:text-XS *:font-medium w-full">
            <Link to={`/`} className="border border-gray--400 text-gray--400 ">
              خیر
            </Link>
            <Link to={`/`} className="text-white bg-blue--500">
              بله
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
