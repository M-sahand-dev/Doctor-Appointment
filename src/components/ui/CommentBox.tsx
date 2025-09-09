import type { JSX } from "react";
import { GiRoundStar } from "react-icons/gi";
import type { Comment } from "../../type/type";
import { Link } from "react-router-dom";

export const CommentBox = ({
  id,
  name,
  image,
  distinction,
  date,
  description,
  aboutDr,
}: Comment): JSX.Element => {
  // Function to render stars based on distinction rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <GiRoundStar key={`full-${i}`} className="text-alert w-3 h-3" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3 h-3">
          <GiRoundStar className="text-gray--300 w-3 h-3 absolute" />
          <div className="overflow-hidden w-1/2 h-full absolute">
            <GiRoundStar className="text-alert w-3 h-3" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <GiRoundStar key={`empty-${i}`} className="text-gray--300 w-3 h-3" />
      );
    }

    return stars;
  };
  return (
    <aside
      id={String(id) + name}
      className="p-6 bg-white rounded-1.5 border border-gray--100 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex  gap-1 w-full">
            <img
              src={image}
              alt={name}
              className=" rounded-full w-7 h-7 border border-blue--50 mt-1"
            />
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-Body-M text-gray--900">{name}</p>
                {/* distinction stars */}
                <div className="flex gap-0.5">{renderStars(distinction)}</div>
              </div>
              <span className="text-Captions-M text-gray--400">({date})</span>
            </div>
          </div>
          <p></p>
        </div>
        <p className="text-XL text-gray--900 h-10">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-Captions-L text-gray--400">{aboutDr}</p>
          <Link to={"/"} className="text-blue--500 text-Captions-L">
            مشاهده دکتر
          </Link>
        </div>
      </div>
    </aside>
  );
};
