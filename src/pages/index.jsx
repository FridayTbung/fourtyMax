import { useState } from "react";
import styled from "styled-components";
import ColumnBar from "../components/columnBar";
import ResultArea from "../components/resultArea";
import WorkDayRow from "../components/workDayRow";
import { getExecutionResult } from "../utils";

const Main = () => {
  const [monWorkTime, setMonWorkTime] = useState(0);
  const [tueWorkTime, setTueWorkTime] = useState(0);
  const [wedWorkTime, setWedWorkTime] = useState(0);
  const [thuWorkTime, setThuWorkTime] = useState(0);
  const [friWorkTime, setFriWorkTime] = useState(0);
  const [friLeaveTime, setFriLeaveTime] = useState(0);
  const [resultText, setResultText] = useState("");

  const handleClickExcute = () => {
    const totalWorkTime =
      monWorkTime + tueWorkTime + wedWorkTime + thuWorkTime + friWorkTime;
    const result = getExecutionResult(totalWorkTime, friLeaveTime);
    setResultText(result[1]);
  };

  return (
    <PageWrapper>
      <ColumnBar />
      <WorkDayRow day="월" setWorkTime={setMonWorkTime} />
      <WorkDayRow day="화" setWorkTime={setTueWorkTime} />
      <WorkDayRow day="수" setWorkTime={setWedWorkTime} />
      <WorkDayRow day="목" setWorkTime={setThuWorkTime} />
      <WorkDayRow
        day="금"
        setWorkTime={setFriWorkTime}
        setLeaveTime={setFriLeaveTime}
      />
      <ExecuteBtn onClick={handleClickExcute}>계산하기</ExecuteBtn>
      <ButtonGroup>
        <ResetBtn>reset</ResetBtn>
        <AutoBtn>auto</AutoBtn>
      </ButtonGroup>
      <ResultArea result={resultText} />
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
  height: 5%;
  padding: 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ResetBtn = styled.button``;

const AutoBtn = styled.button``;
