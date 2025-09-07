import { type JSX } from "react";
import { Link } from "react-router-dom";

export const BtnSign = (): JSX.Element => {
  return (
    <div className="flex items-center gap-0.5 text-blue--500 font-medium text-XS p-2.5">
      <Link to={"/"}>ورود</Link>
      {" / "}
      <Link to={"/"}>ثبت نام</Link>
    </div>
  );
};
