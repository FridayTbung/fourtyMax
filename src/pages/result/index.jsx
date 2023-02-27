import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { workState } from "../../store";
import ResultDetail from "./detail";

const Result = observer(() => {
  const navigate = useNavigate();
  const result = workState.getResult();

  const handleClickGoBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <ResultArea>
        <ResultDetail result={result} />
        <ResultText>
          {result.isCompleteDuty
            ? "고생했다 티붕아~ 어여 들어가~"
            : "아이고 티붕아.. 니 지금 어데갈라카노?"}
        </ResultText>
      </ResultArea>
      <GoBackBtn onClick={handleClickGoBack}>다시 계산하기</GoBackBtn>
    </PageWrapper>
  );
});

export default Result;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #c9c9c9;
  padding: 30px 20px;
  align-items: center;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 38px;
  margin-bottom: 20px;
`;

const GoBackBtn = styled.button`
  width: 158px;
  height: 44px;
  padding: 0.5rem;
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const ResultText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: 700;
  font-size: 22px;
  color: var(--color-main);
`;
