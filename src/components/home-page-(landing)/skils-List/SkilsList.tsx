import { type JSX, useId, useRef, useEffect, useState } from "react";
import { TitleProduct, SeeAll } from "../../index";
import { skillsList } from "../../../constant";
import { Link } from "react-router-dom";

export const SkilsList = (): JSX.Element => {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        container.style.cursor = "grab";
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, startX, scrollLeft]);
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <TitleProduct text="">لیست تخصص ها</TitleProduct>
        <SeeAll href="" />
      </div>
      {/* skill list  */}
      <div
        className="benefits-scroll-container overflow-x-auto cursor-grab flex-nowrap"
        ref={containerRef}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
        <div className="flex items-center gap-4 justify-between">
          {skillsList.map((item) => (
            <Link
              to={"/"}
              key={id + item.id}
              className="flex flex-col items-center gap-2 p-6 border border-gray--100 rounded-1.25xl flex-shrink-0">
              <img src={item.image} alt={item.title} className="" />
              <div className="p-4 flex flex-col gap-4 items-center justify-center">
                <span className="font-medium text-Body-M">{item.title}</span>
                <span className="">۱۴۵+ پزشک</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
