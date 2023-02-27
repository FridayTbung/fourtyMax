import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "./timeTable";

const Main = () => {
  const navigate = useNavigate();

  const handleClickCalculate = () => {
    navigate("/result");
  };
  return (
    <PageWrapper>
      <TimeTableArea>
        <TimeTable />
      </TimeTableArea>
      <CalculateBtn onClick={handleClickCalculate}>계산하기</CalculateBtn>
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

const CalculateBtn = styled.button`
  width: cal(100% - 10px);
  height: 5%;
  padding: 0.5rem;
`;
