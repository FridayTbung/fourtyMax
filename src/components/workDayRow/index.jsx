import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CheckboxInput from "./checkboxInput";
import TimeInput from "./timeInput";
import { parseTimeStringToSeconds } from "../../utils";
import { isValidTimeInput } from "../../utils/validation";

const WorkDayRow = ({ day, setWorkTime, ...arg }) => {
  const [todayWork, setTodayWork] = useState({
    day: `${day}`,
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  });

  const handleChangeTimeInput = (e) => {
    const targetProperty = e.target.name;
    setTodayWork({ ...todayWork, [targetProperty]: e.target.value });
  };

  const handleChangeCheckboxInput = (e) => {
    const targetProperty = e.target.name;
    setTodayWork({ ...todayWork, [targetProperty]: e.target.checked });
  };

  const getTodayWorkTime = useCallback(() => {
    if (!todayWork.isHoliday) {
      const parsedArriveTime = parseTimeStringToSeconds(todayWork.arriveTime);
      const parsedLeaveTime = parseTimeStringToSeconds(todayWork.leaveTime);
      const baseWorkTime = parsedLeaveTime - parsedArriveTime - 3600;
      return todayWork.isBancha ? baseWorkTime + 14400 + 3600 : baseWorkTime;
    } else {
      return 28800;
    }
  }, [todayWork]);

  useEffect(() => {
    if (
      isValidTimeInput({
        arriveTime: todayWork.arriveTime,
        leaveTime: todayWork.leaveTime,
      })
    )
      setWorkTime(getTodayWorkTime());
    else {
      setTodayWork({ ...todayWork, arriveTime: "09:00", leaveTime: "18:00" });
    }

    // 금요일 퇴근 시간 얻기 이 useEffect 안에 한번에 넣어주는게 맞는지? useEffect 쪼개는 기준에 대해서 알아보자
    // if (day === "금") arg.setLeaveTime(todayWork.leaveTime);
  }, [todayWork, setWorkTime, getTodayWorkTime]);

  useEffect(() => {
    if (todayWork.arriveTime === "" || todayWork.leaveTime === "")
      setTodayWork({ ...todayWork, arriveTime: "09:00", leaveTime: "18:00" });
  }, [todayWork]);

  useEffect(() => {
    if (day === "금") arg.setLeaveTime(todayWork.leaveTime);
  }, [arg, day, todayWork.leaveTime]);

  return (
    <ComponentWrapper>
      <Day>{day}</Day>
      <TimeInput
        name="arriveTime"
        onChange={handleChangeTimeInput}
        value={todayWork.arriveTime}
        disabled={todayWork.isHoliday}
      />
      <TimeInput
        name="leaveTime"
        onChange={handleChangeTimeInput}
        value={todayWork.leaveTime}
        disabled={todayWork.isHoliday}
      />
      <CheckboxInput
        name="isBancha"
        onChange={handleChangeCheckboxInput}
        checked={todayWork.isBancha}
        disabled={todayWork.isHoliday}
      ></CheckboxInput>
      <CheckboxInput
        name="isHoliday"
        onChange={handleChangeCheckboxInput}
        checked={todayWork.isHoliday}
      ></CheckboxInput>
    </ComponentWrapper>
  );
};

export default WorkDayRow;

const ComponentWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  border: 1px solid black;
  width: cal(100% - 10px);
  height: 3%;
`;

const Day = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
