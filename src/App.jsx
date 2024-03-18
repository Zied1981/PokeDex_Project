import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Detailpage from "./pages/Detailpage/Detailpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detailpage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
