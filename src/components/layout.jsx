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
  max-width: 700px;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const ContentArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
`;
