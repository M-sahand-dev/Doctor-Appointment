import type { JSX } from "react";
import type { Blog } from "../../type/type";
import { Link } from "react-router-dom";

export const Article = ({
  id,
  title,
  image,
  description,
  date,
}: Blog): JSX.Element => {
  return (
    <div
      className="border border-gray--100 rounded-1.25xl outline-hidden"
      id={String(id)}>
      <img
        src={image}
        alt={title}
        className="w-[390px] h-[256px] rounded-t-1.25xl"
      />
      <div className="flex flex-col gap-2 px-4 py-3">
        <h3 className=" text-gray--800 font-medium text-XS">{title}</h3>
        <p className="text-XS text-gray--600 truncate max-w-[200px]">
          {description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-XL text-gray--500">{date}</p>
          <Link to={`/`} className="text-XS text-blue--500">
            ادامه مطلب
          </Link>
        </div>
      </div>
    </div>
  );
};
