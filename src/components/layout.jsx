import styled from "styled-components";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <ContentArea>{children}</ContentArea>
    </PageWrapper>
  );
};

export default Layout;

const PageWrapper = styled.div`
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  overflow: hidden;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 85%;
  background-color: var(--color-background);
`;
