import React, { useState } from "react";
import { getMonth } from "../../utils/day_month";
import Fields from "./Fields";
import dayjs from "dayjs";
import { daysOfMonth } from "../../utils/day_month";

const WeeklyProjectSection = () => {
  const [monthData, setMonthData] = useState(getMonth());
  const [monthData2, setMonthData2] = useState(daysOfMonth());


  console.log(monthData2);
  return (
    <div className="flex flex-auto mt-[48px]">
      <div className="weekdays-container w-full">
        <div className="sticky flex grid grid-rows-1 grid-cols-7 ml-[52px]">
          {monthData2.map((item, index) => (
            <div className="day-item ">
              <div
                className="text-center"
                key={index}
              >
                <p
                  className={
                    dayjs().date() == item.format("ddd")
                      ? "weekday-day text-[#5364FF]"
                      : "weekday-day"
                  }
                >
                  {item.format("ddd").toUpperCase()}
                </p>
                <p className="flex justify-center border-x border-[#DCDCDD]-200 py-[20px]">
                  <span 
                  className={
                    dayjs().date() == item.format("DD")
                      ? "weekday-date day-active"
                      : "weekday-date"
                  }>
                  {item.format("DD")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex">
            <div className="sidebar flex flex-col self-auto justify-between">
              {new Array(23).fill(null).map((hr, index) => (
                <div className="flex justify-between px-[13px]">
                  <span className="text-[10px] text-[#aaa]">
                    {index + 1}:00
                  </span>
                </div>
              ))}
            </div>

            <div class="overflow-auto w-full">
              <Fields month={monthData} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProjectSection;
