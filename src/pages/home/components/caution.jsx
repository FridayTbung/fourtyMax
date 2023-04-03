import styled from "styled-components";

const Caution = () => {
  return (
    <ComponentWrapper>
      <Title>주의사항</Title>
      <Contents>
        <span>- 본 서비스의 근무시간 산정은 개발 연구원 직군 기준입니다.</span>
        <span>
          - 본 서비스의 산정 결과는 실제 산정 시간과 다소 차이가 있을 수 있으며,
          <br />
          이로 인해 일어날 수 있는 인사상 불이익에 대해서는 책임지지 않습니다.
        </span>
        <span>- 산정 결과는 참고용으로만 사용해주시기 바랍니다.</span>
      </Contents>
    </ComponentWrapper>
  );
};

export default Caution;

const ComponentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin-top: 30px;
  border: 1px solid var(--color-grayA6);
  border-radius: 10px;
  padding: 12px;
`;

const Title = styled.div`
  position: absolute;
  top: -5px;
  left: 30px;
  background-color: var(--color-background);
  color: var(--color-grayA6);
  font-weight: 600;
  padding: 0 5px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contents = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: var(--color-grayA6);
  font-size: var(--font-size-14);

  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }

  span {
    line-height: 130%;
    padding-left: 1.6%;
    text-indent: -1.7%;
  }
`;
