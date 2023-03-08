import { observer } from "mobx-react";
import styled from "styled-components";
import TableHead from "../../components/tableHead";
import DayRow from "../../components/dayRow";
import { workState } from "../../store";

const TimeTable = observer(() => {
  const dailyWorks = workState.getDailyWorks();
  return (
    <ComponentWrapper>
      <TableContainer>
        <TableHead />
        {dailyWorks.map((dailyWork) => (
          <DayRow
            key={dailyWork.dayCode}
            day={dailyWork.day}
            dayCode={dailyWork.dayCode}
            arriveTime={dailyWork.arriveTime}
            leaveTime={dailyWork.leaveTime}
            isBanchaAM={dailyWork.isBanchaAM}
            isBanchaPM={dailyWork.isBanchaPM}
            isHoliday={dailyWork.isHoliday}
          />
        ))}
      </TableContainer>
      <ButtonGroup>
        <Btn onClick={() => workState.reset()}>reset</Btn>
        <Line></Line>
        <Btn>auto</Btn>
      </ButtonGroup>
    </ComponentWrapper>
  );
});

export default TimeTable;

const ComponentWrapper = styled.div`
  border-radius: 3rem;
  background-color: var(--color-white);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const TableContainer = styled.div``;

const Line = styled.div`
  width: 0.5px;
  height: 18px;
  background-color: var(--color-grayA6);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  align-items: center;
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--font-size-18);
  color: var(--color-grayA6);
  cursor: pointer;

  :hover {
  }
`;
