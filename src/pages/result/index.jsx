import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ResultDetail from "./resultDetail";
import goHome from "../../asset/image/goHome.svg";
import notYet from "../../asset/image/mainImg.svg";
import { workState } from "../../store";

const Result = observer(() => {
  const navigate = useNavigate();
  const result = workState.getResult();
  const [isOver, setIsOver] = useState(false);

  const handleClickGoBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <ResultArea>
        <ResultDetail setIsOver={setIsOver} result={result} />
        <ResultText>
          {result.isCompleteDuty
            ? "고생했다 티붕아~ 어여 들어가~"
            : "아이고 티붕아.. 니 지금 어데갈라카노?"}
        </ResultText>
      </ResultArea>
      <GoBackBtn onClick={handleClickGoBack}>다시 계산하기</GoBackBtn>
      <ResultImage imgSrc={isOver ? goHome : notYet}></ResultImage>
    </PageWrapper>
  );
});

export default Result;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ResultArea = styled.div`
  width: 87%;
  height: 274px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 3rem;
  margin: 2rem 0;
`;

const GoBackBtn = styled.button`
  width: 35%;
  height: 6%;
  max-height: 60px;
  border: none;
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 1rem;
  cursor: pointer;
  font-size: 18px;
  font-size: var(--font-size-18);
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  z-index: 10;
`;

const ResultText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: 700;
  font-size: 22px;
  color: var(--color-main);
`;

const ResultImage = styled.div`
  background-image: url(${(props) => props.imgSrc});
  width: 400px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 10px;
  right: auto;
`;
