import { useEffect, useState, type JSX } from "react";
import { banks } from "../../constant";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export const BoxPayment = ({ id }: { id: number }): JSX.Element => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId);
  };
  useEffect(() => {
    if (banks.length > 0) {
      setSelectedBank(banks[0].id);
    }
  }, []);
  return (
    <div className="p-3 border border-gray--100 rounded-1.5 flex flex-col gap-3 h-[555px] w-[450px] max-lg:w-full max-lg:h-full">
      <div className="border p-5 flex flex-col gap-4 border-gray--100 rounded-t-1.5">
        <h5 className="text-Body-L font-medium text-gray--900">
          جزئیات پرداخت
        </h5>
        <div className="flex flex-col gap-4 *:flex *:justify-between *:items-center">
          <div className="">
            <span className="text-XS font-medium text-gray--600">
              مبلغ ویزیت:
            </span>
            <span className="text-Body-S font-bold text-gray--900">
              ۲۰۰،۰۰۰ تومان
            </span>
          </div>
          <div className="">
            <span className="text-XS font-medium text-gray--600">
              هزینه کارمزد:
            </span>
            <span className="text-Body-S font-bold text-gray--900">
              ۲۰،۰۰۰ تومان
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          {" "}
          <span className="text-XS font-medium text-gray--600">
            مبلغ نهایی:
          </span>
          <span className="text-Body-S font-bold text-gray--900">
            ۲۲۰،۰۰۰ تومان
          </span>
        </div>
      </div>
      <div className="border p-5 flex flex-col gap-4 border-gray--100 rounded-b-1.5">
        <h5 className="text-Body-L font-medium text-gray--900">
          درگاه پرداخت آنلاین
        </h5>
        <div className="flex flex-col gap-4">
          {banks.map((bank) => (
            <div
              key={bank.id}
              onClick={() => handleBankSelect(bank.id)}
              className={`p-4 flex items-center justify-between cursor-pointer rounded-1.5 border-gray--100 transition-all ease-in-out duration-200 ${
                selectedBank === bank.id ? "border" : "border-0"
              }`}>
              <label
                htmlFor={bank.id}
                className="flex items-center gap-2 text-XS text-gray--900 cursor-pointer">
                <img src={bank.logo} alt={bank.alt} className="w-8 h-8" />
                {bank.name}
              </label>
              <input
                type="radio"
                name="bank"
                id={bank.id}
                checked={selectedBank === bank.id}
                onChange={() => handleBankSelect(bank.id)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-XL text-gray--900 flex items-center gap-2">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            پرداخت به منزله پذیرش شرایط و قوانین است.
          </label>
        </div>
        <Link
          to={`/detail/${id}${location.search}/SuccessErrorPay`}
          className="grid place-items-center bg-blue--500 rounded-1xl p-3">
          <div className="flex items-center gap-2 text-white text-Body-M font-medium">
            پرداخت
            <FaChevronLeft />
          </div>
        </Link>
      </div>
    </div>
  );
};
