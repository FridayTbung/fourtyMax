import { observer } from "mobx-react";
import styled from "styled-components";
import { workState } from "../../store";
import { parseSecondsToTimeString } from "../../utils/time";

const ResultDetail = observer(() => {
  const result = workState.getResultDetail();
  return (
    <ComponentWrapper>
      <ResultDetailRow>
        총 근무시간 :
        <span> {parseSecondsToTimeString(result.totalWorkTime)} </span>
      </ResultDetailRow>
      <ResultDetailRow>
        초과한 근무시간 :
        <span> {parseSecondsToTimeString(result.overWorkTime)}</span>
      </ResultDetailRow>
      <ResultDetailRow>
        모자란 근무시간 :
        <span> {parseSecondsToTimeString(result.requiredWorkTime)}</span>
      </ResultDetailRow>
      <ResultFrase>{result.frase}</ResultFrase>
    </ComponentWrapper>
  );
});

export default ResultDetail;

const ComponentWrapper = styled.div`
  width: 391px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ResultDetailRow = styled.div`
  font-size: 18px;
  font-weight: 600;
  span {
    color: var(--color-sub);
    font-weight: 700;
  }
`;

const ResultFrase = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: 700;
  font-size: 22px;
  color: var(--color-main);
`;
