import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout";
import Main from "./pages/home";
import Result from "./pages/result";

function App() {
  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  max-width: 600px;
  max-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
`;
