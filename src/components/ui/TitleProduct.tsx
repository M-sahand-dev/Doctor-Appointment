import React, { type JSX } from "react";

export const TitleProduct = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <h4 className=" font-bold text-2xl text-black">{children}</h4>
      <span className="text-Body-M text-black">{text}</span>
    </div>
  );
};
