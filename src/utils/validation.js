import { parseTimeStringToSeconds } from ".";

export const isValidTimeInput = ({ arriveTime, leaveTime }) => {
  const parsedArriveTime = parseTimeStringToSeconds(arriveTime);
  const parsedLeaveTime = parseTimeStringToSeconds(leaveTime);
  if (parsedArriveTime >= parsedLeaveTime) return false;
  return true;
};
