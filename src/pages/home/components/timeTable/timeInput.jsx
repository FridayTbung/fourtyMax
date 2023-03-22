import { useRef } from "react";
import styled from "styled-components";
import clock from "../../../../asset/icon/clock.svg";
import {
  isNumeric,
  isValidHour,
  isValidMinute,
} from "../../../../utils/validation";

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
    if (hour === "" || !isChronicleTime()) {
      hourInputRef.current.focus();
      if (hour) hourInputRef.current.value = "";
    } // 좀 더 예쁘게 짜보기
    if (hour.length === 1) {
      fillEmptyHour(hour);
    }
  };

  const handleBlurMinute = () => {
    const minute = value.minute;
    if (minute === "" || !isChronicleTime()) {
      minuteInputRef.current.focus();
      if (minute) hourInputRef.current.value = "";
    }
    if (minute.length === 1) {
      fillEmptyMinute(minute);
    }
  };

  const handleFocusInput = (e) => {
    e.target.select();
  };
  return (
    <ComponentWrapper>
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
    </ComponentWrapper>
  );
};

export default TimeInput;

const ComponentWrapper = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-grayA6);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: notoSansKr;

  img {
    width: 14px;
    height: 14px;
  }

  margin-right: 10px;
`;

const TimeInputField = styled.input`
  width: 30%;
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
  text-align: center;
`;
