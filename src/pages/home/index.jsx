import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "./components/timeTable";
import MainImgSource from "../../asset/image/mainImg.svg";

const Main = () => {
  const navigate = useNavigate();

  const handleClickCalculate = () => {
    navigate("/result");
  };
  return (
    <PageWrapper>
      <TimeTableArea>
        <TimeTable />
      </TimeTableArea>
      <ExecuteBtn onClick={handleClickCalculate}>계산하기</ExecuteBtn>
      <MainImage />
    </PageWrapper>
  );
};

export default Main;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const TimeTableArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ExecuteBtn = styled.button`
  width: 35%;
  height: 6%;
  max-height: 50px;
  padding: 10px;
  border: none;
  background-color: var(--color-main);
  color: var(--color-white);
  font-size: var(--font-size-18);
  font-weight: 700;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
  }
  z-index: 10;
`;

const MainImage = styled.div`
  background-image: url(${MainImgSource});
  width: 50%;
  height: 50%;
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-size: contain;
`;
