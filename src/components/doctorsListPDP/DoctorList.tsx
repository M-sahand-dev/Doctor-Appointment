import type { JSX } from "react";
import { Filter, Footer, Header, SearchBox } from "../index";

export const DoctorList = (): JSX.Element => {
  return (
    // this component doctor list and search page
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <SearchBox />
        <main className="my-10 relative">
          <div className="">
            <Filter />
            <div className="">
              <nav></nav>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
