export const isNumeric = (value) => !isNaN(value);

export const isValidHour = (value) => {
  const hour = +value;
  if (hour < 0 || hour > 24) return false;
  return true;
};

export const isValidMinute = (value) => {
  const minute = +value;
  if (minute < 0 || minute > 59) return false;
  return true;
};

export const isNotEmptyValue = (dailyWork) => {
  const { arriveTime, leaveTime } = dailyWork;
  if (
    !arriveTime.hour ||
    !arriveTime.minute ||
    !leaveTime.hour ||
    !leaveTime.minute
  )
    return false;
  return true;
};
