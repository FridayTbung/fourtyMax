import { observable } from "mobx";
import {
  getTodayWorkTimeInSeconds,
  parseSecondsToTimeString,
} from "../utils/time";

export const workState = observable({
  mon: {
    day: "월",
    dayCode: "mon",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBancha: false,
    isHoliday: false,
  },
  tue: {
    day: "화",
    dayCode: "tue",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBancha: false,
    isHoliday: false,
  },
  wed: {
    day: "수",
    dayCode: "wed",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBancha: false,
    isHoliday: false,
  },
  thu: {
    day: "목",
    dayCode: "thu",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBancha: false,
    isHoliday: false,
  },
  fri: {
    day: "금",
    dayCode: "fri",
    arriveTime: { hour: "09", minute: "00" },
    leaveTime: { hour: "18", minute: "00" },
    isBancha: false,
    isHoliday: false,
  },

  totalWorkTime: 0,

  setArriveTime(day, value) {
    this[day].arriveTime = { ...this[day].arriveTime, ...value };
  },

  setLeaveTime(day, value) {
    this[day].leaveTime = { ...this[day].leaveTime, ...value };
  },

  setIsBancha(day, value) {
    this[day].isBancha = value;
  },

  setIsHoliday(day, value) {
    this[day].isHoliday = value;
  },

  getWorkDays() {
    return [this.mon, this.tue, this.wed, this.thu, this.fri];
  },

  getTotalWorkTime() {
    const workDays = this.getWorkDays();
    const totalWorkTime = workDays
      .map((todayWorkTime) => getTodayWorkTimeInSeconds(todayWorkTime))
      .reduce((acc, cur) => acc + cur, 0);
    return totalWorkTime;
  },

  getOverWorkTime() {
    return this.totalWorkTime - 144000;
  },

  getNecessaryWorkTime() {
    return 144000 - this.totalWorkTime;
  },

  getResult() {
    const parsedTotalTime = parseSecondsToTimeString(this.totalWorkTime);

    if (this.totalTime >= 144000) {
      const overWorkTime = this.getOverWorkTime();
      return [parsedTotalTime, overWorkTime];
    } else {
      const neccessaryWorkTime = this.getNecessaryWorkTime();
      return [parsedTotalTime, neccessaryWorkTime];
    }
  },
});
