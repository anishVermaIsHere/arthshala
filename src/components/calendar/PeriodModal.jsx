import React from "react";
import dayjs from "dayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { CalendarIcon, Cross, Delete } from "../../utils/widgets/icons";
import { checkedDays, colors } from "../../utils/constants";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material/";
import ColorPicker from "../../utils/widgets/ColorPicker";
import PeriodButton from "../../utils/widgets/PeriodButton";


const PeriodModal = ({ setAddPeriod }) => {
  const [daySelect, setDaySelect] = React.useState(checkedDays);
  const [dateRange, setDateRange] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const handleDays = (id) => {
    let checkedDays = daySelect.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setDaySelect(checkedDays);
  };

  const DayBlock = (day, id, status) => {
    return (
      <>
        <div
          className={status ? "day-block day-active" : "day-block"}
          key={"day" + id}
        >
          <input
            type="checkbox"
            name="day"
            className="day-checkbox absolute inset-y-0"
            onChange={() => handleDays(id)}
            checked={status}
          />
          {day}
        </div>
      </>
    );
  };

  return (
    <div className="period-layout">
      <div className="period-form rounded-2xl">
        <div className="flex justify-between items-center">
          <h4 className="form-title">Add Period</h4>
          <span
            className="text-[#374957] cursor-pointer"
            onClick={() => setAddPeriod(false)}
          >
            <Cross />
          </span>
        </div>

        <div className="mt-[39px]">
          <label htmlFor="period" className="text-base font-bold ">
            Period Name
          </label>
          <input
            className="rounded-[10px] mt-[15px] px-[26px] py-[16px] focus:outline-none border border-[#aaa] w-full"
            type="text"
            name="period"
            id="period"
            placeholder="Enter Period Name"
          />
        </div>

        <div className="mt-[41px] flex items-center justify-between gap-5">
          <div className="w-full">
            <label htmlFor="start-time" className="text-base font-bold ">
              Start Time
            </label>
            
            <input
              className="relative rounded-[10px] mt-[15px] px-[43px] py-[16px] focus:outline-none border border-[#aaa] w-full"
              type="time"
              name="start-time"
              id="start-time"
            />
          </div>

          <div className="w-full">
            <label htmlFor="end-time" className="text-base font-bold ">
              End Time
            </label>
            <input
              className="relative rounded-[10px] mt-[15px] px-[43px] py-[16px] focus:outline-none border border-[#aaa] w-full"
              type="time"
              name="end-time"
              id="end-time"
            />
          </div>
        </div>
        <div className="mt-[41px]">
          <label htmlFor="day" className="text-base font-bold">
            Repeat on days
          </label>
          <div className="flex mt-[14px] gap-[14px]">
            {daySelect.map(({ label, id, checked }) =>
              DayBlock(label, id, checked)
            )}
          </div>
        </div>

        <div className="mt-[39px]">
          <label htmlFor="date-range" className="text-base font-bold ">
            From
          </label>
          <div className="relative date-range-wrapper">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 mr-[50px] pointer-events-none">
              <CalendarIcon />
            </span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["SingleInputDateRangeField"]}>
              <DateRangePicker
              slots={{ field:SingleInputDateRangeField }} 
              format="DD MMM, YYYY" />
            </DemoContainer>
          </LocalizationProvider>
          </div>
          
        </div>

        <div className="flex justify-between items-center mt-[39px]">
          <div className="">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="#F8EBF1"
                name="radio-buttons-group"
              >
                <div className="flex justify-center items-center gap-[10px]">
                  {colors.map((color) => (
                    <div className="relative h-[32px] w-[32px] rounded-full">
                      <ColorPicker color={color} />
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="flex items-center">
            <span className="cursor-pointer mr-5">
              <Delete />
            </span>
            <PeriodButton open={setAddPeriod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodModal;
