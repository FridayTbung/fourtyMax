import styled from "styled-components";

const Header = () => {
  return (
    <ComponentWrapper>
      <ServiceTitle>금요일의 티붕이</ServiceTitle>
    </ComponentWrapper>
  );
};

export default Header;

const ComponentWrapper = styled.div`
  height: 13%;
  background-color: white;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 5px -6px #777;
`;

const ServiceTitle = styled.div``;
