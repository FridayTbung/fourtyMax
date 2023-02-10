import { useState } from "react";
import styled from "styled-components";
import ResultArea from "../../components/resultArea";
import { getExecutionResult, getTotalWorkTime } from "../../utils";
import TimeTable from "./timeTable";

export const INIT_DAILY_WORK_TIMES = {
  월: {
    day: "월",
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  },
  화: {
    day: "화",
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  },
  수: {
    day: "수",
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  },
  목: {
    day: "목",
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  },
  금: {
    day: "금",
    arriveTime: "09:00",
    leaveTime: "18:00",
    isBancha: false,
    isHoliday: false,
  },
};

const Main = () => {
  const [dailyWorkTimes, setDailyWorkTimes] = useState(INIT_DAILY_WORK_TIMES);
  const [resultText, setResultText] = useState("");

  const handleClickExcute = () => {
    const totalWorkTime = getTotalWorkTime(dailyWorkTimes);
    const result = getExecutionResult(totalWorkTime);
    setResultText(result[1]);
  };

  return (
    <PageWrapper>
      <TimeTable
        dailyWorkTimes={dailyWorkTimes}
        setDailyWorkTimes={setDailyWorkTimes}
      />
      <ExecuteBtn onClick={handleClickExcute}>계산하기</ExecuteBtn>
      <ResultArea
        result={resultText}
        onClick={() => setDailyWorkTimes(INIT_DAILY_WORK_TIMES)}
      />
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
