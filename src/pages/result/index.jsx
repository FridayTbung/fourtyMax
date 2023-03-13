import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ResultDetail from "./resultDetail";

const Result = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <ResultArea>
        <ResultDetail />
      </ResultArea>
      <GoBackBtn onClick={() => navigate(-1)}>다시 계산하기</GoBackBtn>
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
`;
