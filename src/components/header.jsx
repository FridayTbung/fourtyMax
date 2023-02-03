import styled from "styled-components";

const Header = () => {
  return (
    <ComponentWrapper>
      <ServiceTitle>금요일의 티붕이</ServiceTitle>
      <ButtonGroup>
        <ResetBtn>reset</ResetBtn>
        <AutoBtn>auto</AutoBtn>
      </ButtonGroup>
    </ComponentWrapper>
  );
};

export default Header;

const ComponentWrapper = styled.div`
  height: 5vh;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 5px -6px #777;
`;

const ServiceTitle = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ResetBtn = styled.button``;

const AutoBtn = styled.button``;
