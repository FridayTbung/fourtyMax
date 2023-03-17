import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ResultDetail from "./resultDetail";
import goHome from "../../asset/image/goHome.svg";
import notYet from "../../asset/image/mainImg.svg";
import { workState } from "../../store";

const Result = () => {
  const navigate = useNavigate();
  const [isOver, setIsOver] = useState(false);

  return (
    <PageWrapper>
      <ResultArea>
        <ResultDetail setIsOver={setIsOver} />
      </ResultArea>
      <GoBackBtn onClick={() => navigate(-1)}>다시 계산하기</GoBackBtn>
      <ResultImage imgSrc={isOver ? goHome : notYet}></ResultImage>
    </PageWrapper>
  );
};

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
  font-size: var(--font-size-18);
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  z-index: 10;
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
