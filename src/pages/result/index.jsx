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
`;

const ResultArea = styled.div``;

const GoBackBtn = styled.button`
  height: 5%;
  padding: 0.5rem;
`;
