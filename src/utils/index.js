export const parseTimeStringToSeconds = (time) => {
  const rawTimeString = time.split(":");
  const seconds = +rawTimeString[0] * 60 * 60 + +rawTimeString[1] * 60;
  return seconds >= 72000 ? seconds - 3600 : seconds; // 저녁 8시 이후 퇴근은 1시간 차감
};

export const parseSecondsToTimeString = (time) => {
  const hour = Math.ceil(time / 3600);
  const minute = Math.ceil(time % 3600) / 60;

  return [hour, minute];
};
