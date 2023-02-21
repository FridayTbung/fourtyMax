import styled from "styled-components";
import { workState } from "../../store";
import TimeTable from "./timeTable";

const Main = () => {
  // const [resultText, setResultText] = useState("");

  const handleClickExcute = () => {
    const result = workState.getTotalWorkTime();
    console.log(result);
  };

  return (
    <PageWrapper>
      <TimeTableArea>
        <TimeTable />
      </TimeTableArea>
      <ExecuteBtn onClick={handleClickExcute}>계산하기</ExecuteBtn>
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

const TimeTableArea = styled.div``;

const ExecuteBtn = styled.button`
  width: cal(100% - 10px);
  height: 5%;
  padding: 0.5rem;
`;
