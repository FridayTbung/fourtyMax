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
  box-sizing: border-box;
  background-color: #c9c9c9;
  padding: 30px 20px;
  align-items: center;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 274px;
  display: flex;
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
