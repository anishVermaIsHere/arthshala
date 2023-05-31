import React, { useContext } from "react";
import { addPeriodCxt } from "../../utils/contexts";
import PeriodButton from "../../utils/widgets/PeriodButton";
import dayjs from "dayjs";

const CalendarHeader = () => {
  const { addPeriod, setAddPeriod } = useContext(addPeriodCxt);
  
  return (
    <>
      <div className="calendar-header flex items-center justify-between mt-[27px]">
        <div className="flex">
          <p className="text-xl font-bold mr-[13px]">
            {dayjs().format('MMMM')} {dayjs().date()}
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="left-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0227 14.6477C12.2224 14.448 12.2406 14.1355 12.0772 13.9153L12.0227 13.8523L7.17075 9L12.0227 4.14775C12.2224 3.94805 12.2406 3.63555 12.0772 3.41534L12.0227 3.35225C11.823 3.15255 11.5105 3.1344 11.2903 3.29779L11.2273 3.35225L5.97725 8.60225C5.77755 8.80195 5.7594 9.11445 5.92279 9.33466L5.97725 9.39775L11.2273 14.6477C11.4469 14.8674 11.8031 14.8674 12.0227 14.6477Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="today-btn">Today</span>
            <span className="right-arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.97725 14.6477C5.77755 14.448 5.7594 14.1355 5.92279 13.9153L5.97725 13.8523L10.8293 9L5.97725 4.14775C5.77755 3.94805 5.7594 3.63555 5.92279 3.41534L5.97725 3.35225C6.17695 3.15255 6.48945 3.1344 6.70966 3.29779L6.77275 3.35225L12.0227 8.60225C12.2224 8.80195 12.2406 9.11445 12.0772 9.33466L12.0227 9.39775L6.77275 14.6477C6.55308 14.8674 6.19692 14.8674 5.97725 14.6477Z"
                  fill="black"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="">
          <PeriodButton open={setAddPeriod} />
        </div>
      </div>
    </>
  );
};

export default CalendarHeader;
