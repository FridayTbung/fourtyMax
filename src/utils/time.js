const MEAL_TIME = 3600; // 1 hour
const HALF_WORKTIME = 14400; // 4hour
const FULL_WORKTIME = 28800; // 8hour

export const parseTimeStringToSeconds = (time) => {
  const { hour, minute } = time;
  const seconds = +hour * 60 * 60 + +minute * 60;
  return seconds;
};

export const parseSecondsToTimeString = (time) => {
  const hour = Math.floor(time / 3600);
  const minute = Math.ceil(time % 3600) / 60;
  return minute ? `${hour}시간 ${minute}분` : `${hour}시간`;
};

const calculateBaseWorkTime = (todayWorkTime) => {
  const parsedArriveTime = parseTimeStringToSeconds(todayWorkTime.arriveTime);
  const parsedLeaveTime = parseTimeStringToSeconds(todayWorkTime.leaveTime);
  const baseWorkTime =
    todayWorkTime.leaveTime >= 20
      ? parsedLeaveTime - parsedArriveTime - MEAL_TIME * 2
      : parsedLeaveTime - parsedArriveTime - MEAL_TIME;
  return baseWorkTime;
};

const calculateBancha = (todayWorkTime, baseWorkTime) => {
  if (todayWorkTime.isBanchaAM) return baseWorkTime + HALF_WORKTIME + MEAL_TIME;
  else if (todayWorkTime.isBanchaPM) return baseWorkTime + HALF_WORKTIME;
};

export const getTodayWorkTimeInSeconds = (todayWorkTime) => {
  const baseWorkTime = calculateBaseWorkTime(todayWorkTime);
  return todayWorkTime.isBanchaAM || todayWorkTime.isBanchaPM
    ? calculateBancha(todayWorkTime, baseWorkTime)
    : baseWorkTime;
};
