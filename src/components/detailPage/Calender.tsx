import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useId, useState, type JSX, type MouseEventHandler } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { dataTiem } from "../../constant";
import type { DataTiemType } from "../../type/type";

export const Calender = (): JSX.Element => {
  const id = useId();
  const [selectedDate, setSelectedDate] = useState<DateObject | null>(null);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);
  const weekDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

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
    <div className="calendar-container">
      <Calendar
        value={selectedDate}
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
      />

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
                    ? "text-white bg-blue-500"
                    : "border border-blue-500 text-blue-500"
                }`}>
                {item.time}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
