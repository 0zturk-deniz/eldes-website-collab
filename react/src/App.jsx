import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <p>Test</p>
      <Routes>
        <Route path="/" element={<div>Anasayfa</div>} />
        <Route path="/urunler" element={<div>Ürünler</div>} />
        <Route path="/iletisim" element={<div>İletişim</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
