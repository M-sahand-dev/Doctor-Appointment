import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const Signin = (): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const auth = UserAuth();
  const session = auth?.session;
  console.log(session);

  return (
    <div className="w-full h-screen bg-white overflow-hidden  grid place-items-center">
      <div className="mx-auto px-24 py-3 max-sm:px-4 mt-20">
        <div className="flex items-center justify-center gap-12">
          <div className="px-40 max-2xl:px-32 max-xl:px-8 max-lg:px-4 py-10 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-6 items-center">
              <Link to={"/"} className="">
                <img src="/image/registrationFormPhoto/Logo.png" alt="logo" />
              </Link>
              <h3 className="text-H3 font-medium text-gray--950">
                به دکتر رزرو خوش آمدید
              </h3>
            </div>
            <p className="text-Body-M font-medium text-gray--600">
              برای ادامه شماره موبایل خود را وارد نمایید.
            </p>
            <form action="" className="flex flex-col gap-4 items-center w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="phone-number"
                  className="text-Body-M font-medium text-gray--700">
                  شماره موبایل
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  className="w-full p-4 outline-hidden bg-white border border-gray--200 rounded-1xl"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="password"
                  className="text-Body-M font-medium text-gray--700">
                  رمز عبور
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="رمز عبور"
                  className="w-full p-4 outline-hidden bg-white border border-gray--200 rounded-1xl"
                />
              </div>
              <Link
                to={"/signin/otp"}
                type="submit"
                // disabled={loading}
                className=" grid place-items-center text-white bg-blue--500 rounded-1xl p-3 cursor-pointer">
                دریافت کد تایید
              </Link>
            </form>
            <div className="flex text-Body-M font-medium">
              <p className="text-gray--950">حساب کاربری ندارید؟</p>
              <Link className="text-blue--500" to={"/signup"}>
                ثبت نام
              </Link>
            </div>
          </div>
          <div className=" relative max-lg:hidden">
            <img
              className=" absolute bottom-72 left-60"
              src="/image/registrationFormPhoto/unsplash_IJ0KiXl4uys.png"
              alt=""
            />
            <div className="flex">
              <img src="/image/registrationFormPhoto/3.png" alt="" />
              <img
                src="/image/registrationFormPhoto/2.png"
                className="relative bottom-16"
                alt=""
              />
              <img
                src="/image/registrationFormPhoto/1.png"
                className="relative bottom-8"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
