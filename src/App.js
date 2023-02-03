import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Layout from "./components/layout";
import Main from "./pages";

function App() {
  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: grey;
`;
