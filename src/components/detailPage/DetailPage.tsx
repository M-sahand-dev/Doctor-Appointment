import type { JSX } from "react";
import { Footer, Header } from "../index";
import { useParams } from "react-router-dom";
import { drsData } from "../../constant";

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
        <main className="my-10 w-full relative">
          {drInformation ? drInformation.name : <div>Doctor not found</div>}
        </main>
      </div>
      <Footer />
    </div>
  );
};
