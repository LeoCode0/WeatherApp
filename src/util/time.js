const Time = (value = "default") => {
  let date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const printDayName = (numberDay) => {
    if (numberDay > 6){
      numberDay = numberDay - 7
    }
    return days[numberDay];
  };
  let name;
  const dateId = date.getDay();
  if (value === "default") {
    name = printDayName(dateId);
  } else {
    name = printDayName(value);
  }

  return {
    date,
    name,
    dateId,
  };
};

export default Time;
