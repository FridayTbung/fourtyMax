import styled from "styled-components";

const ResultArea = ({ result }) => {
  console.log();
  return (
    <ComponentWrapper>
      <ResultText>{result}</ResultText>
    </ComponentWrapper>
  );
};

export default ResultArea;

const ComponentWrapper = styled.div`
  width: cal(100%-10px);
  height: 40%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResultText = styled.div``;
