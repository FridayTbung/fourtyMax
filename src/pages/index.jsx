import { useState } from "react";
import styled from "styled-components";
import ColumnBar from "../components/columnBar";
import WorkDayRow from "../components/workDayRow";

const Main = () => {
  const [monWorkTime, setMonWorkTime] = useState(0);
  const [tueWorkTime, setTueWorkTime] = useState(0);
  const [wedWorkTime, setWedWorkTime] = useState(0);
  const [thuWorkTime, setThuWorkTime] = useState(0);
  const [friWorkTime, setFriWorkTime] = useState(0);

  return (
    <PageWrapper>
      <ColumnBar />
      <WorkDayRow day="월" setWorkTime={setMonWorkTime} />
      <WorkDayRow day="화" setWorkTime={setTueWorkTime} />
      <WorkDayRow day="수" setWorkTime={setWedWorkTime} />
      <WorkDayRow day="목" setWorkTime={setThuWorkTime} />
      <WorkDayRow day="금" setWorkTime={setFriWorkTime} />
      <ExecuteBtn>계산하기</ExecuteBtn>
    </PageWrapper>
  );
};

export default Main;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ExecuteBtn = styled.button`
  width: cal(100% - 10px);
  padding: 0.5rem;
`;
