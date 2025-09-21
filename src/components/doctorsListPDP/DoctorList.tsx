import { useId, useState, type JSX } from "react";
import {
  BoxDoctor,
  CategorisMenu,
  Filter,
  Footer,
  Header,
  SearchBox,
} from "../index";
import { drsData } from "../../constant";
import { CiFilter } from "react-icons/ci";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { NavLink, useSearchParams } from "react-router-dom";

export const DoctorList = (): JSX.Element => {
  const id = useId();
  const [toggleFilter, setToggleFilter] = useState(false);
  const [sortMenu, setSortMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredData = drsData.filter((dr) => {
    const filter = searchParams.get("filter");
    if (!filter) return true;
    const name = dr.name.toLowerCase();
    return name.startsWith(filter.toLowerCase());
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handelFilterBox = () => {
    setToggleFilter(!toggleFilter);
    console.log(toggleFilter);
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Function to return persian number
  const toPersianDigits = (number: number) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return number
      .toString()
      .replace(/\d/g, (digit: string) => persianDigits[parseInt(digit)]);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    // this component doctor list and search page
    <div className="">
      {/* for page filter and change setting */}
      {!toggleFilter ? (
        <div className="">
          <Header />
          <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
            <SearchBox
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <main className="my-10 w-full relative">
              <div className="flex gap-11 relative">
                <Filter
                  toggleFilter={toggleFilter}
                  setToggleFilter={setToggleFilter}
                />
                <div className="w-full mr-[26.75rem] max-2xl:mr-80 max-xl:mr-0">
                  <CategorisMenu />
                  {/* Box */}
                  <div className="hidden max-xl:block">
                    <div className="flex items-center justify-evenly">
                      <div className="cursor-pointer" onClick={handelFilterBox}>
                        <h4 className="flex items-center gap-1 text-Body-L font-medium text-black">
                          <CiFilter className="w-6 h-6" />
                          فیلترها
                        </h4>
                      </div>
                      <div className="w-px h-14 bg-gray--100"></div>
                      <div
                        className="cursor-pointer"
                        onClick={() => setSortMenu(!sortMenu)}>
                        <h4 className="flex items-center gap-1 text-Body-L font-medium text-black">
                          <FaSortAmountDownAlt className="w-6 h-6" />
                          مرتب‌سازی
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out hidden max-xl:block ${
                      sortMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <div className="flex flex-col mt-2 bg-white rounded-lg shadow-md p-2">
                      <NavLink
                        to="/"
                        className="py-3 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        پیش فرض
                      </NavLink>
                      <NavLink
                        to="/"
                        className="py-3 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        محبوب‌ترین
                      </NavLink>
                      <NavLink
                        to="/"
                        className="py-3 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        نزدیک‌ترین نوبت آزاد
                      </NavLink>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-4 my-8">
                    {currentItems.map((item) => (
                      <BoxDoctor
                        key={item.id + id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        specialization={item.specialization}
                        distinction={item.distinction}
                        doctorNumber={item.doctorNumber}
                        address={item.address}
                      />
                    ))}
                  </div>
                  {/* Page nation */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    {/* Page numbers */}
                    {getPageNumbers().map((number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`rounded-2.5xl grid place-items-center py-2 px-4 ${
                          currentPage === number
                            ? "bg-blue--100 text-blue--600 hover:bg-blue--200"
                            : ""
                        } cursor-pointer`}>
                        {toPersianDigits(number)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      ) : (
        <Filter toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />
      )}
    </div>
  );
};
