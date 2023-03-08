import styled from "styled-components";
import { ReactComponent as Title } from "../asset/image/title.svg";
const Header = () => {
  return (
    <ComponentWrapper>
      <ServiceTitle>
        <Title />
      </ServiceTitle>
    </ComponentWrapper>
  );
};

export default Header;

const ComponentWrapper = styled.div`
  height: 18%;
  background-color: var(--color-main);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceTitle = styled.div``;
