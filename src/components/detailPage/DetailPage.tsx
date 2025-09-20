import type { JSX } from "react";
import { Calender, CommentsBox, Footer, Header, Information } from "../index";
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
        <div className="flex items-center gap-2 my-6">
          <Link to={"/"}>
            <BsArrowRightCircle className="w-6 h-6" />
          </Link>
          <h1 className="text-H3 font-bold  text-gray--900">صفحه پزشک</h1>
        </div>
        <main className=" w-full relative">
          <div className="flex justify-between gap-5">
            <div className="">
              <Information drInformation={drInformation} />
              <div className="hidden max-xl:block my-10">
                <Calender id={drInformation?.id ?? 0} />
              </div>
              <CommentsBox drInformation={drInformation} />
            </div>
            <div className="max-xl:hidden">
              <Calender id={drInformation?.id ?? 0} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
      {/* <Outlet /> */}
    </div>
  );
};
