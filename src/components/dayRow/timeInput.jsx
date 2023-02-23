import styled from "styled-components";

const TimeInput = ({
  name,
  value,
  onChangeHour,
  onChangeMinute,
  onBlurHour,
  onBlurMinute,
  disabled,
}) => {
  const handleFocusInput = (e) => {
    e.target.select();
  };

  return (
    <TimeInputWrapper>
      <TimeInputField
        type="text"
        name={name}
        value={value.hour}
        onChange={onChangeHour}
        onFocus={handleFocusInput}
        onBlur={onBlurHour}
        disabled={disabled}
        maxLength="2"
        pattern="[0-9]*"
      />
      <span>시</span>
      <TimeInputField
        type="text"
        name={name}
        value={value.minute}
        onChange={onChangeMinute}
        onFocus={handleFocusInput}
        onBlur={onBlurMinute}
        disabled={disabled}
        maxLength="2"
        pattern="[0-9]*"
      />
      <span>분</span>
    </TimeInputWrapper>
  );
};

export default TimeInput;

const TimeInputWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeInputField = styled.input`
  width: 30px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
