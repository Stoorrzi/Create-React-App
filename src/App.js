import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErstePage from "./pages/erstePage";

/*example*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ErstePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
