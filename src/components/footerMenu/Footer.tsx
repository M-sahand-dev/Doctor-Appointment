import { useId, type JSX } from "react";
import { Logo } from "../index";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { navigationItems, socialMediaLinks } from "../../constant";
import { FiPhone } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";

export const Footer = (): JSX.Element => {
  const id = useId();
  return (
    <footer className="footer mt-8 bg-gray-50 pt-10">
      <div className="px-28 py-3 max-sm:px-4">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="">
            <h3 className="text-gray--900 font-bold text-Body-S">
              لینک‌های سریع
            </h3>

            <div className="*:opacity-50 flex flex-col gap-4 pt-6 text-XS">
              <Link to="/" className=" text-gray--900">
                صفحه اصلی
              </Link>
              {navigationItems.map((item) => (
                <Link
                  key={id + item.title}
                  to={item.to}
                  className=" text-gray--900">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="text-gray--900 font-bold text-Body-S">
              اطلاعات حقوقی
            </h3>
            <div className="*:opacity-50 text-gray--900 flex flex-col gap-4 mt-6 text-XS">
              <p>تمامی حقوق محفوظ است.</p>
              <p>سال تأسیس : 2025</p>
            </div>
          </div>
          <div className="">
            <h3 className="text-gray--900 font-bold text-Body-S">
              اطلاعات تماس
            </h3>
            <div className=" flex flex-col items-center gap-4 mt-6">
              <div className="flex flex-col items-center gap-3">
                <IoPhonePortraitOutline className="text-2xl text-gray--900" />
                <div className="">
                  <p className="text-XS text-gray--300">۰۹۱۲ ۳۴۵ ۶۷۸۹</p>
                  <p className="text-XS text-gray--300">۰۹۱۲ ۳۴۵ ۶۷۹۰</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                {" "}
                <FiPhone className="text-2xl text-gray--900" />
                <div className="">
                  <p className="text-XS text-gray--300">۰۲۱-۷۷ ۴۲۵۸۶۷</p>
                  <p className="text-XS text-gray--300">۰۲۱-۷۷ ۴۲۵۸۶۸</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:flex flex-col hidden">
            <h3 className="text-gray--900 font-bold text-Body-S">
              ما را دنبال کنید
            </h3>
            <div className="flex gap-1">
              {/* social media icons  */}
              {socialMediaLinks.map((item) => (
                <a
                  key={id + item.id}
                  target="_blank"
                  rel="noreferrer"
                  href={item.to}>
                  <item.icon className="text-2xl text-gray--900 mx-2 my-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="px-8 py-6 bg-galsses-primary rounded-1.5 flex flex-col gap-2.5 max-lg:w-full">
            {" "}
            <h3 className="text-gray--900 font-bold text-Body-S ">
              مشترک شوید
            </h3>
            <div className="w-full flex bg-white rounded-0.75xl border-2 border-border-email-box">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="آدرس ایمیل"
                className="w-full outline-none p-2 text-XS placeholder:text-XS text-gray--700"
              />
              <button className="py-2 px-3 bg-blue--500 grid place-items-center cursor-pointer rounded-l-0.75xl text-white text-lg">
                <HiOutlineArrowNarrowLeft />
              </button>
            </div>
            <p className="text-justify text-XS text-gray--400 w-64 max-lg:w-full">
              اپلیکیشن رزرو نوبت برای گرفتن نوبت سریع و غیرحضوری وبهترین دکترهای
              متخصص با دکتر رزرو.
            </p>
          </div>
        </div>
        <div className="h-[3px] w-full bg-gray-300 my-8"></div>
        <div className="flex justify-between items-center mt-10 gap-4 pl-16">
          <div className="flex gap-1 max-sm:hidden">
            {/* social media icons  */}
            {socialMediaLinks.map((item) => (
              <a
                key={id + item.id}
                target="_blank"
                rel="noreferrer"
                href={item.to}>
                <item.icon className="text-2xl text-gray--900 mx-2 my-4" />
              </a>
            ))}
          </div>
          <Logo />
        </div>
      </div>
    </footer>
  );
};
