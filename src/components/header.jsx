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
  width: 100%;
  height: 162px;
  background-color: var(--color-main);
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceTitle = styled.div``;
