/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Next from "./pages/Next";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/next" element={<Next></Next>}></Route>
      </Routes>
    </div>
  );
}

export default App;
