import styled from "styled-components";
import { workState } from "../../store";
import CheckboxInput from "./checkboxInput";
import TimeInput from "./timeInput";
import { parseTimeStringToSeconds } from "../../utils/time";

const DayRow = ({
  day,
  dayCode,
  arriveTime,
  leaveTime,
  isBanchaAM,
  isBanchaPM,
  isHoliday,
}) => {
  const updateTime = {
    arriveHour: (value) =>
      workState.setArriveTime(dayCode, {
        hour: value,
      }),
    leaveHour: (value) =>
      workState.setLeaveTime(dayCode, {
        hour: value,
      }),
    arriveMinute: (value) =>
      workState.setArriveTime(dayCode, {
        minute: value,
      }),
    leaveMinute: (value) =>
      workState.setLeaveTime(dayCode, {
        minute: value,
      }),
  };

  const fillEmptyTime = {
    arriveHour: (value) =>
      workState.setArriveTime(dayCode, { hour: `0${value}` }),
    leaveHour: (value) =>
      workState.setLeaveTime(dayCode, { hour: `0${value}` }),
    arriveMinute: (value) =>
      workState.setArriveTime(dayCode, { minute: `0${value}` }),
    leaveMinute: (value) =>
      workState.setArriveTime(dayCode, { minute: `0${value}` }),
  };

  const updateCheckbox = {
    isBanchaAM: (value) => workState.setIsBanchaAM(dayCode, value),
    isBanchaPM: (value) => workState.setIsBanchaPM(dayCode, value),
    isHoliday: (value) => workState.setIsHoliday(dayCode, value),
  };

  const isChronicleTime = (arriveTime, leaveTime) => {
    const parsedArriveTime = parseTimeStringToSeconds(arriveTime);
    const parsedLeaveTime = parseTimeStringToSeconds(leaveTime);
    return parsedArriveTime < parsedLeaveTime;
  };
  return (
    <ComponentWrapper>
      <Day>{day}</Day>
      <TimeInput
        name="arriveTime"
        onChangeHour={updateTime["arriveHour"]}
        onChangeMinute={updateTime["arriveMinute"]}
        fillEmptyHour={fillEmptyTime["arriveHour"]}
        fillEmptyMinute={fillEmptyTime.arriveMinute}
        isChronicleTime={() => isChronicleTime(arriveTime, leaveTime)}
        value={arriveTime}
        disabled={isHoliday}
      />
      <TimeInput
        name="leaveTime"
        onChangeHour={updateTime["leaveHour"]}
        onChangeMinute={updateTime["leaveMinute"]}
        fillEmptyHour={fillEmptyTime.leaveHour}
        fillEmptyMinute={fillEmptyTime.leaveMinute}
        isChronicleTime={() => isChronicleTime(arriveTime, leaveTime)}
        value={leaveTime}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isBanchaAM"
        onChange={updateCheckbox.isBanchaAM}
        checked={isBanchaAM}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isBanchaPM"
        onChange={updateCheckbox.isBanchaPM}
        checked={isBanchaPM}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isHoliday"
        onChange={updateCheckbox.isHoliday}
        checked={isHoliday}
      />
    </ComponentWrapper>
  );
};

export default DayRow;

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
