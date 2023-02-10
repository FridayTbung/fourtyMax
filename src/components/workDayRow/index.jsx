import { useEffect } from "react";
import styled from "styled-components";
import { isValidTimeInput } from "../../utils/validation";
import CheckboxInput from "./checkboxInput";
import TimeInput from "./timeInput";

const WorkDayRow = ({ todayWorkTime, setDailyWorkTimes }) => {
  const handleChangeTimeInput = (e) => {
    const targetProperty = e.target.name;
    setDailyWorkTimes((prev) => ({
      ...prev,
      [todayWorkTime.day]: {
        ...todayWorkTime,
        [targetProperty]: e.target.value,
      },
    }));
  };

  const handleChangeCheckboxInput = (e) => {
    const targetProperty = e.target.name;
    setDailyWorkTimes((prev) => ({
      ...prev,
      [todayWorkTime.day]: {
        ...todayWorkTime,
        [targetProperty]: e.target.value,
      },
    }));
  };

  useEffect(() => {
    if (
      !isValidTimeInput({
        arriveTime: todayWorkTime.arriveTime,
        leaveTime: todayWorkTime.leaveTime,
      })
    ) {
      setDailyWorkTimes((prev) => ({
        ...prev,
        [todayWorkTime.day]: {
          ...todayWorkTime,
          arriveTime: "09:00",
          leaveTime: "18:00",
        },
      }));
    }
  }, [setDailyWorkTimes, todayWorkTime]);

  return (
    <ComponentWrapper>
      <Day>{todayWorkTime.day}</Day>
      <TimeInput
        name="arriveTime"
        onChange={handleChangeTimeInput}
        value={todayWorkTime.arriveTime}
        disabled={todayWorkTime.isHoliday}
      />
      <TimeInput
        name="leaveTime"
        onChange={handleChangeTimeInput}
        value={todayWorkTime.leaveTime}
        disabled={todayWorkTime.isHoliday}
      />
      <CheckboxInput
        name="isBancha"
        onChange={handleChangeCheckboxInput}
        checked={todayWorkTime.isBancha}
        disabled={todayWorkTime.isHoliday}
      ></CheckboxInput>
      <CheckboxInput
        name="isHoliday"
        onChange={handleChangeCheckboxInput}
        checked={todayWorkTime.isHoliday}
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
