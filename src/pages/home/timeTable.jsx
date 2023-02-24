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
        <ResetBtn onClick={() => workState.reset()}>reset</ResetBtn>
        <AutoBtn>auto</AutoBtn>
      </ButtonGroup>
    </ComponentWrapper>
  );
});

export default TimeTable;

const ComponentWrapper = styled.div`
  margin: 1rem;
`;

const TableContainer = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ResetBtn = styled.button``;

const AutoBtn = styled.button``;
