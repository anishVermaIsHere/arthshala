import React, {useState} from "react";
import WeeklyProjectSection from "./WeeklyProjectSection";
import CalendarHeader from "./CalendarHeader";
import NewCald from "./NewCald";
import PeriodModal from "./PeriodModal";
import {addPeriodCxt} from "../../utils/contexts";


const Calendar = () => {
  const planning = ["Project Planning", "Weekly Planning", "Planning Insights"];
  const [addPeriod,setAddPeriod]=useState(false);
  
  return (
    <section className="">
      <div className="flex items-center justify-between pb-[14px] mr-2">
        <ul className="flex items-center gap-[67px]">
          {planning.map((item, index) => (
            index==1?<li key={"planning-" + index} className="py-[10px] px-[12px] rounded-[5px] cursor-pointer list-active">
              <span className="text-base">{item}</span>
            </li>
            :
            <li key={"planning-" + index} className="py-[10px] px-[12px] rounded cursor-pointer">
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
        <div className="search-box relative rounded-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.739 2C17.109 2 21.477 6.368 21.477 11.738C21.477 14.2715 20.5047 16.5823 18.9136 18.3165L22.0444 21.4407C22.3374 21.7337 22.3384 22.2077 22.0454 22.5007C21.8994 22.6487 21.7064 22.7217 21.5144 22.7217C21.3234 22.7217 21.1314 22.6487 20.9844 22.5027L17.8159 19.343C16.1491 20.6778 14.0357 21.477 11.739 21.477C6.369 21.477 2 17.108 2 11.738C2 6.368 6.369 2 11.739 2ZM11.739 3.5C7.196 3.5 3.5 7.195 3.5 11.738C3.5 16.281 7.196 19.977 11.739 19.977C16.281 19.977 19.977 16.281 19.977 11.738C19.977 7.195 16.281 3.5 11.739 3.5Z"
                fill="#aaa"
              />
            </svg>
          </span>
          <input
            type="search"
            name="search"
            id="search"
            className="block py-[10px] pl-12 pr-5 text-[13px] w-full focus:outline-none rounded-full"
            placeholder="Search for projects"
          />
        </div>
      </div>
      <hr className=" border border-gray-200"/>
      <div className="mx-3">
        <addPeriodCxt.Provider value={{addPeriod,setAddPeriod}}>
            <CalendarHeader />
            {addPeriod&&<PeriodModal setAddPeriod={setAddPeriod}/>}
        </addPeriodCxt.Provider>
        <WeeklyProjectSection />
        {/* <NewCald /> */}
      </div>
    </section>
  );
};

export default Calendar;
