import { observer } from "mobx-react";
import styled from "styled-components";
import TableHead from "./tableHead";
import TableRow from "./tableRow";
import { workState } from "../../../../store";

const TimeTable = observer(() => {
  const dailyWorks = workState.getDailyWorks();

  const handleClickReset = () => {
    workState.reset();
  };
  return (
    <ComponentWrapper>
      <TableContainer>
        <TableHead />
        {dailyWorks.map((dailyWork) => (
          <TableRow
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
      <ButtonWrapper>
        <ResetButton onClick={handleClickReset}>reset</ResetButton>
      </ButtonWrapper>
    </ComponentWrapper>
  );
});

export default TimeTable;

const ComponentWrapper = styled.div`
  border-radius: 3rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  align-items: center;
`;

const ResetButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--font-size-14);
  color: var(--color-grayA6);
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`;
