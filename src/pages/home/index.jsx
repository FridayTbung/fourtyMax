import { observer } from "mobx-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { workState } from "../../store";
import { validateExcuteError } from "../../utils/validation";
import ErrorMsg from "./errorMsg";
import TimeTable from "./timeTable";

const Main = observer(() => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClickExecuteButton = () => {
    const errMsg = validateExcuteError(workState);
    if (!errMsg) navigate("/result");
    else setError(errMsg);
  };

  return (
    <PageWrapper>
      <TimeTableArea>
        <TimeTable />
      </TimeTableArea>
      <ExecuteBtn onClick={handleClickExecuteButton}>계산하기</ExecuteBtn>
      <ErrorMsgArea>
        <ErrorMsg error={error} />
      </ErrorMsgArea>
    </PageWrapper>
  );
});

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

const ErrorMsgArea = styled.div``;
