import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GraphPage from "./components/GraphPage";
import LandingPage from "./components/LandingPage";
import {GlobalStyle} from "./styles/GlobalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/graph" element={<GraphPage />} />
      </Routes>
    </Router>
  );
};

export default App;
