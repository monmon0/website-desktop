import React from "react";

const CurrentDayAndDate = () => {
  const getCurrentDayAndDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      weekday: "long",
    //   year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <p> {getCurrentDayAndDate()}</p>
    </div>
  );
};

export default CurrentDayAndDate;
