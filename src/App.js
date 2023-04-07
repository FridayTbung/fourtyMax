import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout";
import Main from "./pages/home";
import Result from "./pages/result";
import ProtectRoute from "./protectRoute";

function App() {
  const [isAllowed, setIsAllowed] = useState(false);

  const allowResultPage = () => {
    setIsAllowed(true);
  };
  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Main allowResultPage={allowResultPage} />}
          />
          <Route
            path="/result"
            element={
              <ProtectRoute isAllowed={isAllowed}>
                <Result />
              </ProtectRoute>
            }
          />
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
