import styled from "styled-components";

const WorkDay = ({ day }) => {
  return (
    <ComponentWrapper>
      <Day>{day}</Day>
      <WorkHourInput type="time" />
      <WorkHourInput type="time" />
      <CheckboxInput type="checkbox" />
      <CheckboxInput type="checkbox" />
      <CheckboxInput type="checkbox" />
      <CheckboxInput type="checkbox" />
    </ComponentWrapper>
  );
};

export default WorkDay;

const ComponentWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: space-evenly;
  align-items: center;
`;

const Day = styled.div``;

const WorkHourInput = styled.input`
  width: 120px;
  height: 50px;
`;

const CheckboxInput = styled.input``;
