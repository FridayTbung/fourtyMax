import styled from "styled-components";

const ColumnBar = () => {
  return (
    <ComponentWrapper>
      <DayColumn>요일</DayColumn>
      <ArriveTimeColumn>출근시간</ArriveTimeColumn>
      <LeaveTimeColumn>퇴근시간</LeaveTimeColumn>
      <IsBanchaColumn>반차</IsBanchaColumn>
      <IsHolidayColumn>휴가</IsHolidayColumn>
    </ComponentWrapper>
  );
};

export default ColumnBar;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 3vh;
  border: 1px solid black;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 1px solid black;
  }

  div:last-child {
    border-right: 0px;
  }
`;

const DayColumn = styled.div`
  flex: 1;
`;

const ArriveTimeColumn = styled.div`
  flex: 2;
`;

const LeaveTimeColumn = styled.div`
  flex: 2;
`;

const IsBanchaColumn = styled.div`
  flex: 1;
`;

const IsHolidayColumn = styled.div`
  flex: 1;
`;
