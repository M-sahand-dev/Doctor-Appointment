import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
// import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import persian_fa from "react-date-object/locales/persian_fa";
import { useId, useState, type JSX, type MouseEventHandler } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { dataTiem, weekDays } from "../../constant";
import type { DataTiemType } from "../../type/type";
import { Link } from "react-router-dom";

export const Calender = (): JSX.Element => {
  const id = useId();
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const handleDateSelect = (date: DateObject) => {
    setSelectedDate(date);
  };

  const handleSelectTime = (itemId: number) => {
    const item = dataTiem.find((item) => item.id === itemId);
    if (item && item.active && !item.reserv) {
      setSelectedTimeId((prevSelected) =>
        prevSelected === itemId ? null : itemId
      );
    }
  };

  return (
    <div className="calendar-container p-4 rounded-1.5 border border-gray--100 h-[640px]">
      <div className="rounded-1.5 border border-gray--100 p-3">
        <div className="flex items-center justify-between">
          <h2 className="text font-bold text-Body-L text-gray--950">تقویم</h2>
          <p className="text-Body-S text-gray--400">
            {new Intl.DateTimeFormat("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
        </div>
        <Calendar
          value={selectedDate}
          // plugins={[weekends()]}
          monthYearSeparator=" "
          renderButton={(
            direction: string,
            handleClick: MouseEventHandler<HTMLButtonElement> | undefined
          ) => (
            <button
              className="bg-blue-50 text-blue-500 rounded-full p-1"
              onClick={handleClick}>
              {direction === "right" ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
          )}
          onChange={handleDateSelect}
          calendar={persian}
          locale={persian_fa}
          weekDays={weekDays}
          className="rmdp-calendar px-1 py-1.5 gap-2 bg-gray-75 rounded-lg"
          mapDays={({ date, today, selectedDate, isSameDate }) => {
            const props: { className: string; onClick?: () => void } = {
              className:
                "font-medium text-Captions-L text-gray-400 cursor-pointer p-1",
            };

            if (isSameDate(date, today)) {
              props.className += " bg-blue-500 text-white rounded-full";
            }

            if (selectedDate && isSameDate(date, selectedDate)) {
              props.className += " bg-blue-200 text-blue-800 rounded-full";
            }

            return props;
          }}
          // @ts-expect-error: style prop is supported by Calendar but not in types
          style={{ boxShadow: "none" }}
        />
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-2 py-4">
          {dataTiem.map((item: DataTiemType) => {
            const isDisabled = item.reserv || !item.active;
            const isSelected = selectedTimeId === item.id;

            return (
              <button
                type="button"
                key={item.id + id}
                onClick={() => handleSelectTime(item.id)}
                disabled={isDisabled}
                className={`rounded-0.75xl p-2 text-Captions-L font-medium text-center ${
                  isDisabled
                    ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                    : isSelected
                    ? "text-white bg-blue-500 cursor-pointer "
                    : "border border-blue-500 text-blue-500 cursor-pointer "
                }`}>
                {item.time}
              </button>
            );
          })}
        </div>
      </div>
      <Link
        className=" bg-blue--500 text-center grid text-white p-3 rounded-1xl font-medium text-Body-M"
        to={`/`}>
        رزرو نوبت
      </Link>
    </div>
  );
};
