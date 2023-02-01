import styled from "styled-components";
import WorkDay from "../components/workDay";

const Main = () => {
  return (
    <PageWrapper>
      <ColumnSection>
        <div>요일</div>
        <div>출근시간</div>
        <div>퇴근시간</div>
        <div>중식</div>
        <div>석식</div>
        <div>반차</div>
        <div>휴가</div>
      </ColumnSection>
      <WorkDay day="월" />
      <WorkDay day="화" />
      <WorkDay day="수" />
      <WorkDay day="목" />
    </PageWrapper>
  );
};

export default Main;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ColumnSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  height: 3vh;
  border-bottom: 1px solid black;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-right: 1px solid black;
  }

  div:last-child {
    border-right: 0px;
  }
`;
