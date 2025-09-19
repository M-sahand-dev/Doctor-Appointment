import type { JSX } from "react";
import { Calender, Footer, Header, Information } from "../index";
import { Link, useParams } from "react-router-dom";
import { drsData } from "../../constant";
import { BsArrowRightCircle } from "react-icons/bs";

export const DetailPage = (): JSX.Element => {
  const getProduct = (id: number) => {
    return drsData.find((dr) => dr.id === id);
  };
  const params = useParams();
  const drInformation = getProduct(parseInt(String(params.id)));
  return (
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <div className="flex items-center gap-2 my-10">
          <Link to={"/"}>
            <BsArrowRightCircle className="w-6 h-6" />
          </Link>
          <h1 className="text-H3 font-bold  text-gray--900">صفحه پزشک</h1>
        </div>
        <main className=" w-full relative">
          <div className="flex justify-between gap-5">
            <Information drInformation={drInformation} />
            <Calender />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
