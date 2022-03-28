import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
