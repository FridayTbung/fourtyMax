import { observer } from "mobx-react";
import styled from "styled-components";
import { workState } from "../../store";
import { parseSecondsToTimeString } from "../../utils/time";

const ResultDetail = observer(() => {
  const result = workState.getResultDetail();
  return (
    <ComponentWrapper>
      <ResultDetailRow>
        총 근무시간 : {parseSecondsToTimeString(result.totalWorkTime)}
      </ResultDetailRow>
      <ResultDetailRow>
        초과한 근무시간 : {parseSecondsToTimeString(result.overWorkTime)}
      </ResultDetailRow>
      <ResultDetailRow>
        모자란 근무시간 : {parseSecondsToTimeString(result.requiredWorkTime)}
      </ResultDetailRow>
      <ResultDetailRow>{result.frase}</ResultDetailRow>
    </ComponentWrapper>
  );
});

export default ResultDetail;

const ComponentWrapper = styled.div`
  margin: 1rem;
`;

const ResultDetailRow = styled.div``;
