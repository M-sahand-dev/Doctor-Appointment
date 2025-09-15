import type { JSX } from "react";
import { NavLink } from "react-router-dom";

export const CategorisMenu = (): JSX.Element => {
  return (
    <nav className="px-3.5 py-4 bg-white rounded-1.5 border border-gray--100 w-full  max-2xl:rounded-none max-xl:hidden">
      <div className="flex w-full items-center gap-4">
        <h2 className="text-black text-Body-M">مرتب سازی بر اساس:</h2>
        <ul className="flex items-center gap-5 text-gray--600 font-medium text-Captions-L">
          <NavLink to={"/"}>پیش فرض</NavLink>
          <NavLink to={"/"}>محبوب‌ترین</NavLink>
          <NavLink to={"/"}>نزدیک‌ترین نوبت آزاد</NavLink>
        </ul>
      </div>
    </nav>
  );
};
