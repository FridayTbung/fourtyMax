export const parseTimeStringToSeconds = (time) => {
  const rawTimeString = time.split(":");
  const seconds = +rawTimeString[0] * 60 * 60 + +rawTimeString[1] * 60;
  return seconds >= 72000 ? seconds - 3600 : seconds; // 저녁 8시 이후 퇴근은 1시간 차감
};

export const parseSecondsToTimeString = (time) => {
  const hour = Math.floor(time / 3600);
  const minute = Math.ceil(time % 3600) / 60;

  return minute ? `${hour}시간 ${minute}분` : `${hour}시간`;
};

export const getExecutionResult = (totalTime, friLeaveTime) => {
  const parsedTotalTime = parseSecondsToTimeString(totalTime);
  if (totalTime >= 144000) {
    return [
      true,
      `총 근무시간 ${parsedTotalTime}으로 금요일 ${friLeaveTime}에 집에 갈 수 있어!`,
    ];
  } else {
    return [
      false,
      `총 근무시간이 ${parsedTotalTime}인데, 정말 금요일 ${friLeaveTime}에 집에 갈 수 있다고 생각해?`,
    ];
  }
};