import styled from "styled-components";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <ComponentWrapper>
      <Header />
      <ContentArea>{children}</ContentArea>
    </ComponentWrapper>
  );
};

export default Layout;

const ComponentWrapper = styled.div`
  height: 100vh;
  background-color: var(--color-background);
`;

const ContentArea = styled.div``;
