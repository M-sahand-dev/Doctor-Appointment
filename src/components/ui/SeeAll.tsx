import type { JSX } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SeeAll = ({ href }: { href: string }): JSX.Element => {
  return (
    <Link to={`/${href}`} className="flex gap-6 text-gray--400 items-center">
      <span className="">مشاهده همه</span>
      <FaChevronLeft />
    </Link>
  );
};
