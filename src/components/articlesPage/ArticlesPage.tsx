import { useId, useState, type JSX } from "react";
import { Article, Footer, Header, TitleProduct } from "../index";
import { articles } from "../../constant";

export const ArticlesPage = (): JSX.Element => {
  const id = useId();
  // Page number
  const [currentPage, setCurrentPage] = useState(1);
  // varaible for show item in the page
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);
  // Calculation cont item in the page
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  // For change page
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
    <div className="">
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <div className=" my-6">
          <TitleProduct text="">آخرین مقالات</TitleProduct>
        </div>
        <main className="my-10 relative">
          {/* Article item */}
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {currentItems.map((article) => (
              <Article key={id + article.id} {...article} />
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
        </main>
      </div>
      <Footer />
    </div>
  );
};
