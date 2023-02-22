import { observable } from "mobx";
import {
  getTodayWorkTimeInSeconds,
  parseSecondsToTimeString,
} from "../utils/time";

const FOURTY_HOURS = 144000;

export const workState = observable({
  mon: {
    day: "월",
    dayCode: "mon",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBanchaAM: false,
    isBanchaPM: false,
    isHoliday: false,
  },
  tue: {
    day: "화",
    dayCode: "tue",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBanchaAM: false,
    isBanchaPM: false,
    isHoliday: false,
  },
  wed: {
    day: "수",
    dayCode: "wed",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBanchaAM: false,
    isBanchaPM: false,
    isHoliday: false,
  },
  thu: {
    day: "목",
    dayCode: "thu",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBanchaAM: false,
    isBanchaPM: false,
    isHoliday: false,
  },
  fri: {
    day: "금",
    dayCode: "fri",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBanchaAM: false,
    isBanchaPM: false,
    isHoliday: false,
  },

  totalWorkTime: 0,

  setArriveTime(day, value) {
    this[day].arriveTime = { ...this[day].arriveTime, ...value };
  },

  setLeaveTime(day, value) {
    this[day].leaveTime = { ...this[day].leaveTime, ...value };
  },

  setIsBanchaAM(day, value) {
    this[day].isBanchaAM = value;
    this[day].isBanchaPM = !value;
  },

  setIsBanchaPM(day, value) {
    this[day].isBanchaPM = value;
    this[day].isBanchaAM = !value;
  },

  setIsHoliday(day, value) {
    this[day].isHoliday = value;
    this[day] = {
      ...this[day],
      arriveTime: { hour: "09", minute: "00" },
      leaveTime: { hour: "18", minute: "00" },
      isBanchaAM: false,
      isBanchaPM: false,
    };
  },

  getWorkDays() {
    return [this.mon, this.tue, this.wed, this.thu, this.fri];
  },

  reset() {
    const days = ["mon", "tue", "wed", "thu", "fri"];
    days.map(
      (day) =>
        (this[day] = {
          ...this[day],
          arriveTime: { hour: "09", minute: "00" },
          leaveTime: { hour: "18", minute: "00" },
          isBanchaAM: false,
          isBanchaPM: false,
          isHoliday: false,
        })
    );
  },

  getTotalWorkTime() {
    const workDays = this.getWorkDays();
    const totalWorkTime = workDays
      .map((todayWorkTime) => getTodayWorkTimeInSeconds(todayWorkTime))
      .reduce((acc, cur) => acc + cur, 0);
    return totalWorkTime;
  },

  getOverWorkTime() {
    return this.totalWorkTime - FOURTY_HOURS;
  },

  getNecessaryWorkTime() {
    return FOURTY_HOURS - this.totalWorkTime;
  },

  getResult() {
    const parsedTotalTime = parseSecondsToTimeString(this.totalWorkTime);

    if (this.totalTime >= FOURTY_HOURS) {
      const overWorkTime = this.getOverWorkTime();
      return [parsedTotalTime, overWorkTime];
    } else {
      const neccessaryWorkTime = this.getNecessaryWorkTime();
      return [parsedTotalTime, neccessaryWorkTime];
    }
  },
});
