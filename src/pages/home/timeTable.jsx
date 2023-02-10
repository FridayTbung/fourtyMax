import styled from "styled-components";
import { INIT_DAILY_WORK_TIMES } from ".";
import TableHead from "../../components/tableHead";
import WorkDayRow from "../../components/workDayRow";

const TimeTable = ({ dailyWorkTimes, setDailyWorkTimes }) => {
  const handleClickResetInputs = () => {
    setDailyWorkTimes(INIT_DAILY_WORK_TIMES);
  };

  return (
    <ComponentWrapper>
      <TableContainer>
        <TableHead />
        {Object.values(dailyWorkTimes).map((todayWorkTime) => (
          <WorkDayRow
            key={todayWorkTime.day}
            todayWorkTime={todayWorkTime}
            setDailyWorkTimes={setDailyWorkTimes}
          />
        ))}
      </TableContainer>
      <ButtonGroup>
        <ResetBtn onClick={handleClickResetInputs}>reset</ResetBtn>
        <AutoBtn>auto</AutoBtn>
      </ButtonGroup>
    </ComponentWrapper>
  );
};

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
