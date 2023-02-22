import styled from "styled-components";
import { workState } from "../../store";
import { isNumeric, isValidHour, isValidMinute } from "../../utils/validation";
import CheckboxInput from "./checkboxInput";
import TimeInput from "./timeInput";

const DayRow = ({
  day,
  dayCode,
  arriveTime,
  leaveTime,
  isBanchaAM,
  isBanchaPM,
  isHoliday,
}) => {
  const handleChangeHour = (e) => {
    const { value: hour, name: inputName } = e.target;
    if (!(isNumeric(hour) && isValidHour(hour))) return;
    if (inputName === "arriveTime") {
      workState.setArriveTime(dayCode, {
        hour,
      });
    } else if (inputName === "leaveTime")
      workState.setLeaveTime(dayCode, {
        hour,
      });
  };

  const handleChangeMinute = (e) => {
    const { value: minute, name: inputName } = e.target;
    if (!(isNumeric(minute) && isValidMinute(minute))) return;
    if (inputName === "arriveTime")
      workState.setArriveTime(dayCode, {
        minute,
      });
    else if (inputName === "leaveTime")
      workState.setLeaveTime(dayCode, {
        minute,
      });
  };

  const handleChangeIsBanchaAM = (e) => {
    workState.setIsBanchaAM(dayCode, e.target.checked);
  };

  const handleChangeIsBanchaPM = (e) => {
    workState.setIsBanchaPM(dayCode, e.target.checked);
  };

  const handleChangeIsHoliday = (e) => {
    workState.setIsHoliday(dayCode, e.target.checked);
  };

  return (
    <ComponentWrapper>
      <Day>{day}</Day>
      <TimeInput
        name="arriveTime"
        onChangeHour={handleChangeHour}
        onChangeMinute={handleChangeMinute}
        value={arriveTime}
        disabled={isHoliday}
      />
      <TimeInput
        name="leaveTime"
        onChangeHour={handleChangeHour}
        onChangeMinute={handleChangeMinute}
        value={leaveTime}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isBanchaAM"
        onChange={handleChangeIsBanchaAM}
        checked={isBanchaAM}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isBanchaPM"
        onChange={handleChangeIsBanchaPM}
        checked={isBanchaPM}
        disabled={isHoliday}
      />
      <CheckboxInput
        name="isHoliday"
        onChange={handleChangeIsHoliday}
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
