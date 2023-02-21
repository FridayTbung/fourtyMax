export const parseTimeStringToSeconds = (time) => {
  const { h, m } = time;
  const seconds = +h * 60 * 60 + +m * 60;
  return seconds >= 72000 ? seconds - 3600 : seconds; // 저녁 8시 이후 퇴근은 1시간 차감
};

export const parseSecondsToTimeString = (time) => {
  const hour = Math.floor(time / 3600);
  const minute = Math.ceil(time % 3600) / 60;
  return minute ? `${hour}시간 ${minute}분` : `${hour}시간`;
};

export const getTodayWorkTimeInSeconds = (todayWorkTime) => {
  if (!todayWorkTime.isHoliday) {
    const parsedArriveTime = parseTimeStringToSeconds(todayWorkTime.arriveTime);
    const parsedLeaveTime = parseTimeStringToSeconds(todayWorkTime.leaveTime);
    const baseWorkTime = parsedLeaveTime - parsedArriveTime - 3600;
    return todayWorkTime.isBancha ? baseWorkTime + 14400 + 3600 : baseWorkTime;
  } else {
    return 28800;
  }
};
