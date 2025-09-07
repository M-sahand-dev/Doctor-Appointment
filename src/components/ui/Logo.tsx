import type { JSX } from "react";
import { Link } from "react-router-dom";

export const Logo = (): JSX.Element => {
  return (
    // logo component ui with link to home page
    // max-sm:text-Body-M max-md:text-H3 max-lg:text-H2
    <Link
      to="/"
      className="flex items-center  font-bold text-2xl max-lg:font-medium max-md:text-H3 max-sm:text-Body-M">
      <img className="py-2" src="/public/image/Union.png" alt="logo" />
      <div className="flex items-center gap-2 w-8 h-8 max-lg:w-7 max-lg:h-7 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5">
        <span className="text-black">دکتر</span>
        <span className="text-blue--500">رزرو</span>
      </div>
    </Link>
  );
};
