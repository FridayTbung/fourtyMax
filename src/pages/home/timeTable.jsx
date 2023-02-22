import { observer } from "mobx-react";
import styled from "styled-components";
import TableHead from "../../components/tableHead";
import DayRow from "../../components/dayRow";
import { workState } from "../../store";

const TimeTable = observer(() => {
  const workDays = workState.getWorkDays();

  return (
    <ComponentWrapper>
      <TableContainer>
        <TableHead />
        {workDays.map((workDay) => (
          <DayRow
            key={workDay.dayCode}
            day={workDay.day}
            dayCode={workDay.dayCode}
            arriveTime={workDay.arriveTime}
            leaveTime={workDay.leaveTime}
            isBanchaAM={workDay.isBanchaAM}
            isBanchaPM={workDay.isBanchaPM}
            isHoliday={workDay.isHoliday}
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
