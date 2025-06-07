import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar.jsx Component */}
      <Navbar />
      {/* ScrollToTop.jsx Component */}
      <ScrollToTop/>


      <div className="pt-20"> {/* Add padding container around all routes */}
        <Routes>
          <Route path="/" element={<div>Anasayfa</div>} />
          
          <Route path="/urunler" element={
            <div className="min-h-screen" style={{ minHeight: '200vh' }}>
              Ürünler
              <p>MESELA</p>
              <p>Test</p>
              {/* ... rest of your content */}
            </div>
          } />
          
          <Route path="/iletisim" element={<div>İletişim</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;