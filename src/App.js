import CatFax from "./CatFax";
import LandingPage from "./LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DogFax from "./DogFax";
import AnimalFax from "./AnimalFax";
import "./spinner.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/cat" element={<CatFax />} />
          <Route path="/dog" element={<DogFax />} />
          <Route path="/animal" element={<AnimalFax />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
