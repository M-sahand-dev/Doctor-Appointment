import { useEffect, useRef, useState, type JSX } from "react";
import { Link } from "react-router-dom";

export const Otp = ({ length = 5 }): JSX.Element => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(0); // زمان به ثانیه

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
    }
    // Move focus to previous input on backspace
    if (value === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // اگر input فعلی خالی است، به قبلی برو و آن را پاک کن
        if (index > 0) {
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputs.current[index - 1]?.focus();
        }
      } else {
        // اگر input فعلی پر است، آن را پاک کن
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(120);
  }, []);

  const resendOTP = () => {
    setTimeLeft(120);
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="w-full h-screen bg-white grid place-items-center">
      <div className="mx-auto max-sm:px-0 max-sm:h-full w-full grid place-items-center">
        <div className="flex items-center justify-center gap-12 w-1/2 max-md:w-full max-sm:h-full">
          <div className="relative z-10 px-16 py-10 flex flex-col gap-8 items-center border border-gray--100 rounded-1xl max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:border-0 max-sm:px-4">
            <div className="flex flex-col gap-6 items-center">
              <Link to={"/"} className="">
                <img src="/image/registrationFormPhoto/Logo.png" alt="logo" />
              </Link>
              <h3 className="text-H3 font-medium text-gray-950">
                به دکتر رزرو خوش آمدید
              </h3>
            </div>
            <p className="text-Body-M font-medium text-gray--600">
              کد ارسال شده به شماره ۷۸۹***۰۹۱۲ را وارد کنید
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-2.5 flex-row-reverse">
                {otp.map((_, index) => (
                  <input
                    type="text"
                    inputMode="numeric"
                    key={index}
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => {
                      inputs.current[index] = el;
                    }}
                    className="p-2 border border--gray-200 outline-none w-12 h-12 text-center rounded-xl font-medium text-Body-L text-gray--700 transition-all"
                  />
                ))}
              </div>

              <div className="text-center">
                {timeLeft > 0 ? (
                  <div className="">
                    <p className="text-Body-S font-medium text--gray-600">
                      <span className="font-bold text-gray--800 mr-2">
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                      </span>
                    </p>
                    <button
                      disabled
                      className="px-4 py-2 text-Body-S text-gray--400 cursor-not-allowed">
                      ارسال مجدد کد
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <p className="text-Body-S font-medium text-gray--600">
                      کد را دریافت نکردید؟
                    </p>
                    <button
                      onClick={resendOTP}
                      className="px-4 py-2 text-Body-S text-red--500 hover:text--red-600 font-medium transition-colors">
                      ارسال مجدد کد
                    </button>
                  </div>
                )}
              </div>
            </div>
            <Link
              to={`/`}
              className="py-2.5 px-16 rounded-1xl bg-blue--500 text-white grid place-items-center">
              ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
