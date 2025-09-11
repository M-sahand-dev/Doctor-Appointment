import { useId, type JSX } from "react";
import { Benefits, Footer, Header, TitleProduct } from "../index";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { honorarilyUs } from "../../constant";
import type { HonorarilyUs } from "../../type/type";

export const AboutUs = (): JSX.Element => {
  const id = useId();
  return (
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <main className="my-10 relative">
          {/* about us hero section title  */}
          <div className="flex justify-between items-center max-lg:flex-col-reverse">
            <div className="flex flex-col gap-6 ">
              <TitleProduct text="">درباره دکتر رزرو</TitleProduct>
              <h1 className="text-2xl font-bold w-96  max-lg:w-full">
                نوبت‌دهی سریع و هوشمند برای پزشکان و بیماران
              </h1>
              <p className=" w-96 text-justify text-H3 max-lg:w-full">
                دکتر رزرو یک پلتفرم مدرن و کاربرپسند برای مدیریت نوبت‌دهی پزشکان
                و بیماران است. ما با ارائه یک سیستم هوشمند، به پزشکان کمک
                می‌کنیم تا زمان‌های خود را بهتر مدیریت کنند و به بیماران این
                امکان را می‌دهیم که بدون اتلاف وقت، نوبت خود را به‌صورت آنلاین
                رزرو کنند.
              </p>
            </div>
            <div className="flex relative">
              <img
                src="/image/aboutUs/Frame 1361017071.png"
                alt=""
                className="max-lg:hidden"
              />
              <img
                src="/public/image/aboutUs/Frame 1361017071 (1).png"
                alt=""
                className="max-lg:block hidden"
              />
            </div>
          </div>
          {/* about us benefits  */}
          <div className="flex flex-col my-14">
            <TitleProduct text="">چرا دکتر رزرو؟</TitleProduct>
            {/* benefits section*/}
            <Benefits />
          </div>
          {/* information call us */}
          <div className=" relative flex items-center ">
            <img
              src="/image/aboutUs/Group.png"
              alt=""
              className=" absolute z-0 bottom-[ -8.5rem] -right-16"
            />
            <div className="z-10 pr-4 w-full grid gap-4">
              <TitleProduct text="">اطلاعات تماس</TitleProduct>
              <div className="flex w-full max-xl:flex-wrap max-lg:*:flex-col  max-lg:*:items-center *:gap-4 *:flex *:justify-between *:items-center *:w-full gap-4 *:p-10 *:border *:border-gray--100 *:rounded-1.25xl *:bg-white">
                <div className="flex ">
                  <div className="flex gap-2 items-center">
                    <IoPhonePortraitOutline className=" w-6 h-6" />
                    <h4 className=" text-black font-medium text-Body-L">
                      جهت مشاوره
                    </h4>
                  </div>
                  <div className="font-medium text-black text-Body-L flex flex-col">
                    <span className="">۰۹۰۱۹۴۶۷۳۰۰</span>
                    <span className="">۰۹۰۱۹۴۶۷۳۰۰</span>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center">
                    <HiOutlinePhone className="rotate-[270deg] w-6 h-6" />
                    <h4 className=" text-black font-medium text-Body-L">
                      جهت شکایات و انتقادات
                    </h4>
                  </div>
                  <div className="font-medium text-black text-Body-L  flex flex-col">
                    <span className="">۰۲۱-۷۷ ۴۲۵۸۶۷</span>
                    <span className="">۰۲۱-۷۷ ۴۲۵۸۶۷</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* information about us and about use in the comiunity  tecnologinc  */}
          <div className="flex items-center max-lg:flex-col-reverse">
            <img
              src="/image/aboutUs/Frame 1361017074.png"
              alt=""
              className="w-[498px] h-[541px]"
            />
            <div className="grid gap-6">
              <TitleProduct text="">تکنولوژی در خدمت سلامت</TitleProduct>
              <p className="text-justify  text-H3 text-black">
                ما با استفاده از فناوری‌های روز، فرایند نوبت‌دهی پزشکی را به
                سطحی جدید ارتقا داده‌ایم. دکتر رزرو با بهره‌گیری از الگوریتم‌های
                هوشمند، سیستم یادآوری خودکار و داده‌های ایمن‌شده، بستری مطمئن و
                سریع برای دریافت خدمات پزشکی فراهم کرده است.
                <br /> طراحی کاربرپسند و دسترسی آسان به اطلاعات، باعث شده تا
                بیماران بدون پیچیدگی‌های اضافی و در کمترین زمان، نوبت موردنظر
                خود را رزرو کنند. همچنین، پزشکان می‌توانند با مدیریت دقیق‌تر
                زمان‌های خود، بهره‌وری بیشتری داشته باشند.
                <br /> با دکتر رزرو، نوبت‌دهی دیگر یک چالش نیست، بلکه تجربه‌ای
                راحت، سریع و بدون دغدغه است.
              </p>
            </div>
          </div>
          {/* HonorarilyUs */}
          <div className=" relative flex items-center ">
            <div className="relaive">
              {" "}
              <img
                src="/image/aboutUs/Group.png"
                alt=""
                className="absolute z-0 bottom-[ -8rem] -right-16"
              />
              <img
                src="/image/aboutUs/Group.png"
                alt=""
                className="absolute z-0 bottom-[ -8rem] right-4"
              />
            </div>
            <div className="z-10 pr-8 w-full grid gap-4">
              <TitleProduct text="">افتخارات و دستاوردهای ما</TitleProduct>
              <div className="flex justify-between gap-2 max-lg:flex-wrap">
                {honorarilyUs.map((item: HonorarilyUs, index: number) => (
                  <div
                    key={index + id}
                    className="p-10 flex w-full flex-col gap-2 items-center bg-white rounded-1.25xl border border-gray--100">
                    <p className="text-H3 font-bold text-black">
                      +{item.number}هزار
                    </p>
                    <p className="font-medium text-gray--600 text-Body-M">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* information bout developer */}
          <div className="flex flex-col gap-4 items-center my-20">
            <TitleProduct text="">توسعه دنده</TitleProduct>
            <div className="flex flex-wrap gap-8 items-center justify-center ">
              <div className="p-4   rounded-2.5xl border border-gray--100 flex flex-col gap-2 items-end ">
                <img
                  src="/public/image/aboutUs/IMG_20230811_125853_383.jpg"
                  className="rounded-2.5xl w-[276px] h-[277px]"
                  alt=""
                />
                <h1 className="font-sans font-bold  text-black">
                  Mehdi Leylaei
                </h1>
                <p className="font-sans text-gray--600">Frontend Developer</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
