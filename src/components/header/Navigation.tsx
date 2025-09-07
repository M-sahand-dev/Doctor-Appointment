import { useId, type JSX } from "react";
import { navigationItems } from "../../constant";
import { NavLink } from "react-router-dom";

export const Navigation = (): JSX.Element => {
  const id = useId();
  // Navigation bar component
  return (
    <nav className="max-lg:hidden">
      <ul className="flex gap-12 items-center px-4 text-Body-M">
        {navigationItems.map((item) => (
          <NavLink
            className={`hover:text-blue--900`}
            key={id + item.id}
            to={item.to}>
            <li className="">{item.title}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
