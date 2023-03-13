import { useRef } from "react";
import styled from "styled-components";
import clock from "../../asset/icon/clock.svg";
import { isNumeric, isValidHour, isValidMinute } from "../../utils/validation";

const TimeInput = ({
  name,
  value,
  onChangeHour,
  onChangeMinute,
  fillEmptyHour,
  fillEmptyMinute,
  isChronicleTime,
  disabled,
}) => {
  const hourInputRef = useRef();
  const minuteInputRef = useRef();

  const handleChangeHour = (e) => {
    const hour = e.target.value;
    if (!(isNumeric(hour) && isValidHour(hour))) return;
    onChangeHour(hour);
  };

  const handleChangeMinute = (e) => {
    const minute = e.target.value;
    if (!(isNumeric(minute) && isValidMinute(minute))) return;
    onChangeMinute(minute);
  };

  const handleBlurHour = () => {
    const hour = value.hour;
    if (hour === "" || !isChronicleTime()) hourInputRef.current.focus(); // To Do: isChronicleTime false일때 입력 지우기
    if (hour.length === 1) {
      fillEmptyHour(hour);
    }
  };

  const handleBlurMinute = () => {
    const minute = value.minute;
    if (minute === "" || !isChronicleTime()) minuteInputRef.current.focus();
    if (minute.length === 1) {
      fillEmptyMinute(minute);
    }
  };

  const handleFocusInput = (e) => {
    e.target.select();
  };

  return (
    <TimeInputWrapper>
      <TimeBox>
        <TimeInputField
          ref={hourInputRef}
          type="text"
          name={name}
          value={value.hour}
          onChange={handleChangeHour}
          onFocus={handleFocusInput}
          onBlur={handleBlurHour}
          disabled={disabled}
          maxLength="2"
          pattern="[0-9]*"
        />
        <p>:</p>
        <TimeInputField
          ref={minuteInputRef}
          type="text"
          name={name}
          value={value.minute}
          onChange={handleChangeMinute}
          onFocus={handleFocusInput}
          onBlur={handleBlurMinute}
          disabled={disabled}
          maxLength="2"
          pattern="[0-9]*"
        />
        <img alt="clock" src={clock} />
      </TimeBox>
    </TimeInputWrapper>
  );
};

export default TimeInput;

const TimeInputWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeBox = styled.div`
  border: 1px solid var(--color-grayA6);
  width: 84px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: notoSansKr;
  img {
    width: 14px;
    height: 14px;
  }
  span {
    line-height: 20px;
  }
`;

const TimeInputField = styled.input`
  width: 20px;
  color: var(--color-font);
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  border: none;
`;
