import { useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { gender } from "../../constant";

export const Signup = (): JSX.Element => {
  const [selectGender, setSelectGender] = useState<string>("");
  const handelSelectGender = (genderId: string) => {
    setSelectGender(genderId);
  };

  return (
    <div className="w-full h-screen bg-white   grid place-items-center">
      <div className="mx-auto max-sm:px-4 w-full grid place-items-center">
        <div className="flex items-center justify-center gap-12 w-1/2 max-md:w-full">
          <div className="relative z-10 w-full px-40 max-2xl:px-32 max-xl:px-8 max-lg:px-4 py-10 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-6 items-center">
              <Link to={"/"} className="">
                <img src="/image/registrationFormPhoto/Logo.png" alt="logo" />
              </Link>
              <h3 className="text-H3 font-medium text-gray--950">
                به دکتر رزرو خوش آمدید
              </h3>
            </div>
            <form action="" className="flex flex-col gap-4 items-center w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="name"
                  className="text-Body-M font-medium text-gray--700">
                  نام
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="مثال: مهدی"
                  className="w-full p-4 outline-hidden bg-white border border-gray--200 rounded-1xl"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="famillyName"
                  className="text-Body-M font-medium text-gray--700">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  name="famillyName"
                  id="famillyName"
                  placeholder="مثال: اسنکندری"
                  className="w-full p-4 outline-hidden bg-white border border-gray--200 rounded-1xl"
                />
              </div>
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
                  htmlFor="email"
                  className="text-Body-M font-medium text-gray--700">
                  ایمیل
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="مثال: example@gamil.com"
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
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="rPassword"
                  className="text-Body-M font-medium text-gray--700">
                  تکرار رمز عبور
                </label>
                <input
                  type="password"
                  name="rPassword"
                  id="rPassword"
                  placeholder="تکرار رمز عبور"
                  className="w-full p-4 outline-hidden bg-white border border-gray--200 rounded-1xl"
                />
              </div>
              <div className="flex items-center gap-4 w-full">
                {gender.map((gender) => (
                  <div
                    key={gender.id}
                    onClick={() => handelSelectGender(gender.id)}
                    className="flex items-center gap-4">
                    <input
                      type="radio"
                      checked={selectGender === gender.id}
                      onChange={() => handelSelectGender(gender.id)}
                      name="gender"
                      id={gender.id}
                    />
                    <label htmlFor={gender.id}>{gender.title}</label>
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className=" grid place-items-center text-white bg-blue--500 rounded-1xl p-3 cursor-pointer w-full">
                ثبت نام
              </button>
            </form>
            <div className="flex text-Body-M font-medium">
              <p className="text-gray--950">قبلا حساب داشتید؟</p>
              <Link className="text-blue--500" to={"/signin"}>
                ورود
              </Link>
            </div>
          </div>
          <img
            className=" absolute bottom-72 left-60 z-0"
            src="/image/registrationFormPhoto/unsplash_IJ0KiXl4uys.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
