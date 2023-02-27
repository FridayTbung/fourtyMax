import styled from "styled-components";
import { parseSecondsToTimeString } from "../../utils/time";

const Detail = ({ result }) => {
  const { totalWorkTime, overWorkTime, requiredWorkTime } = result;
  return (
    <ComponentWrapper>
      <DetailRow>
        총 근무시간 :<span> {parseSecondsToTimeString(totalWorkTime)} </span>
      </DetailRow>
      <DetailRow>
        초과한 근무시간 :<span> {parseSecondsToTimeString(overWorkTime)}</span>
      </DetailRow>
      <DetailRow>
        모자란 근무시간 :
        <span> {parseSecondsToTimeString(requiredWorkTime)}</span>
      </DetailRow>
    </ComponentWrapper>
  );
};

export default Detail;

const ComponentWrapper = styled.div`
  width: 391px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  font-size: 18px;
  font-weight: 600;
  span {
    color: var(--color-sub);
    font-weight: 700;
  }
`;
