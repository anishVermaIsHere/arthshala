import React from "react";
import Day from "./Day";

const Fields = ({ month }) => {
  return (
    <div className="flex grid grid-rows-15 grid-cols-7">
      {month.map((row, id) => {
        return (
          <React.Fragment key={id}>
            {row.map((day, index) =><Day id={id} index={index} day={day} />)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Fields;
