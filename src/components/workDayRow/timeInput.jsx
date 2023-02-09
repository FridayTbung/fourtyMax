import styled from "styled-components";

const TimeInput = ({ name, value, onChange, onKeyDown, disabled }) => {
  return (
    <WorkHourInputArea>
      <WorkHourInput
        type="time"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </WorkHourInputArea>
  );
};

export default TimeInput;

const WorkHourInputArea = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const WorkHourInput = styled.input``;
