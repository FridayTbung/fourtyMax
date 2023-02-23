import { observable } from "mobx";
import { getTodayWorkTime } from "../utils/time";

const WEEK_DUTY_WORKTIME = 144000;

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

  setArriveTime(day, value) {
    this[day].arriveTime = { ...this[day].arriveTime, ...value };
  },

  setLeaveTime(day, value) {
    this[day].leaveTime = { ...this[day].leaveTime, ...value };
  },

  setIsBanchaAM(day, value) {
    this[day].isBanchaAM = value;
    if (this[day].isBanchaPM) this[day].isBanchaPM = !value;
  },

  setIsBanchaPM(day, value) {
    this[day].isBanchaPM = value;
    if (this[day].isBanchaAM) this[day].isBanchaAM = !value;
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
    return workDays
      .map((todayWorkTime) => getTodayWorkTime(todayWorkTime))
      .reduce((acc, cur) => acc + cur, 0);
  },

  getResultDetail() {
    const totalWorkTime = this.getTotalWorkTime();
    const timeDiffrence = totalWorkTime - WEEK_DUTY_WORKTIME;
    const isComplteDuty = timeDiffrence >= 0;
    return {
      totalWorkTime,
      overWorkTime: isComplteDuty ? timeDiffrence : 0,
      requiredWorkTime: isComplteDuty ? 0 : Math.abs(timeDiffrence),
      frase: isComplteDuty
        ? "고생했다 티붕아~ 어여 드가라~"
        : "아이고 티붕아 니 지금 어데갈라카노?",
    };
  },
});
