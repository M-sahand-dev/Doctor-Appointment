import type { JSX } from "react";
import { Link } from "react-router-dom";

export const NotFound = (): JSX.Element => {
  return (
    <div className="h-screen overflow-y-hidden mx-auto px-28 py-3 max-sm:px-4">
      <div className="flex overflow-hidden justify-center items-center gap-11">
        <img src="/image/404.png" alt="404" />
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-medium text-black">
            صفحه مورد نظر در دسترس نیست!
          </h3>
          <p className="text-H3 font-medium text-gray--800">
            دسترسی خود به اینترنت را بررسی کنید!
          </p>
          <Link
            className="border border-blue--500 rounded-1xl p-2.5 text-blue--500 w-32 text-center text-XS font-medium"
            to={`/`}>
            بارگذاری مجدد
          </Link>
        </div>
      </div>
    </div>
  );
};
