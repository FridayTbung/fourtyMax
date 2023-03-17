import styled from "styled-components";

const TableHead = () => {
  return (
    <ComponentWrapper>
      <DayColumn>요일</DayColumn>
      <ArriveTimeColumn>출근시간</ArriveTimeColumn>
      <LeaveTimeColumn>퇴근시간</LeaveTimeColumn>
      <IsBanchaColumn>오전반차</IsBanchaColumn>
      <IsBanchaColumn>오후반차</IsBanchaColumn>
      <IsHolidayColumn>휴가/휴일</IsHolidayColumn>
    </ComponentWrapper>
  );
};

export default TableHead;

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40px;
  // background-color: red;
  border-bottom: 1px solid var(--color-grayB3);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100%;
    font-size: var(--font-size-14);
    color: var(--color-font);
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
  flex: 1.1;
`;

const IsHolidayColumn = styled.div`
  flex: 1.1;
`;
