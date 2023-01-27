import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
