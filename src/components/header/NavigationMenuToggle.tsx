// import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constant";
import {} from "../index";
import { type JSX, useId } from "react";
import { FaChevronLeft } from "react-icons/fa";

export const NavigationMenuToggle = ({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}): JSX.Element => {
  const id = useId();
  return (
    <nav
      className={`max-lg:block hidden absolute top-24 h-screen w-60 bg-white z-10 mx-auto  py-3 max-sm:px-4  ${
        isMenuOpen ? "right-28 max-sm:right-4" : "-right-96"
      }`}>
      <div className="">
        <ul className="flex gap-8 flex-col items-center px-4 text-Body-M *:w-full ">
          {navigationItems.map((item) => (
            <NavLink
              className={`hover:text-blue--900 flex items-center justify-between`}
              key={id + item.id}
              to={item.to}>
              <li className="">{item.title}</li>
              <FaChevronLeft />
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};
