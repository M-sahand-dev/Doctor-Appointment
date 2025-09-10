import { useId, useState, type JSX } from "react";
import { Footer, Header, TitleProduct } from "../index";
import { questions } from "../../constant";
import { IoIosArrowDown } from "react-icons/io";

export const FAQ = (): JSX.Element => {
  const id = useId();
  const [showMore, setShowMore] = useState<string | null>(null);

  const handelShowMore = (question: string) => {
    setShowMore(showMore === question ? null : question);
  };
  return (
    <div>
      <Header />
      <div className="mx-auto px-28 py-3 max-sm:px-4 mt-20">
        <div className=" my-6">
          <TitleProduct text="">سوالات متداول</TitleProduct>
        </div>
        <main className="my-10">
          <div className="p-6 rounded-2xl bg-white border border-gray--100">
            {/* Questions List */}
            {questions.map((question) => (
              <article
                key={question.id + id}
                onClick={() => handelShowMore(question.question)}
                className={`px-5 py-6 flex flex-col gap-3 cursor-pointer ${
                  question.id === 1 ? "" : "border-t border-gray--100"
                }`}>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-Body-M text-black">
                    {question.question}
                  </p>
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ease-in-out text-gray--600 ${
                      showMore === question.question ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    showMore === question.question
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}>
                  <p className={`text-XS text-gray--700 pl-4`}>
                    {question.answer}
                  </p>
                </div>
              </article>
            ))}
            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1"></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
