import React from "react";
import dayjs from "dayjs";

const Day = ({ day, id, index }) => {
  const weekday = day.format("ddd").toUpperCase();
  const date = day.format("DD");

  return index == 3 ? (
    <div className=" py-[20px] border border-[#DCDCDD]-200" key={index}>
      <div className="bg-[#F8EBF1] rounded p-1">
        <p className="text-[13px] ">Project 1</p>
        <p className="text-[#D1609A] text-[10px] ">1:00 to 2:00</p>
        <p className="bg-[#D16D9A] text-[10px] text-white rounded p-1">Activity 1</p>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col px-[85px] py-[20px] border border-[#DCDCDD]-200 text-sm text-center"
      key={index}
    >
    </div>
  );
};

export default Day;
