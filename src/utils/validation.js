import { parseTimeStringToSeconds } from "./time";

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

export const isValidWorkTime = (todayWorkState) => {
  const { arriveTime, leaveTime } = todayWorkState;
  const parsedArriveTime = parseTimeStringToSeconds(arriveTime);
  const parsedLeaveTime = parseTimeStringToSeconds(leaveTime);
  if (parsedArriveTime >= parsedLeaveTime) return false;
  return true;
};

export const isNotBlank = (todayWorkState) => {
  const { arriveTime, leaveTime } = todayWorkState;
  if (
    !arriveTime.hour ||
    !arriveTime.minute ||
    !leaveTime.hour ||
    !leaveTime.minute
  )
    return false;
  return true;
};

export const validateExcuteError = (workState) => {
  const days = ["mon", "tue", "wed", "thu", "fri"];
  const errorMsg = days.map((day) => {
    const isValidValue = isValidWorkTime(workState[day]);
    const isNotEmpty = isNotBlank(workState[day]);

    if (!isValidValue) return "퇴근시간이 출근시간보다 빠를 수 업습니다";
    else if (!isNotEmpty) return "입력되지 않은 값이 있습니다";
    else return null;
  });
  return errorMsg;
};
