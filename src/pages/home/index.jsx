import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ErrorMsg from "./errorMsg";
import TimeTable from "./timeTable";

const Main = observer(() => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <TimeTableArea>
        <TimeTable />
      </TimeTableArea>
      <ExecuteBtn onClick={() => navigate("/result")}>계산하기</ExecuteBtn>
      {/* <ErrorMsgArea>
        <ErrorMsg error={error} />
      </ErrorMsgArea> */}
    </PageWrapper>
  );
});

export default Main;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimeTableArea = styled.div`
  width: 90%;
  height: fit-contents;
  margin-bottom: 2rem;
`;

const ExecuteBtn = styled.button`
  width: 35%;
  height: 6%;
  border: none;
  background-color: var(--color-main);
  color: var(--color-white);
  font-size: var(--font-size-18);
  font-weight: 700;
  border-radius: 1rem;
`;
const ErrorMsgArea = styled.div``;
