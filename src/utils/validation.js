import { parseTimeStringToSeconds } from "./time";

export const isValidTimeInput = ({ arriveTime, leaveTime }) => {
  const parsedArriveTime = parseTimeStringToSeconds(arriveTime);
  const parsedLeaveTime = parseTimeStringToSeconds(leaveTime);
  if (parsedArriveTime >= parsedLeaveTime) return false;
  return true;
};

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
