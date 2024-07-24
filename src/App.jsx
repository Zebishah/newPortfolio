import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from "./modules/TitlePage";
import Navbar from "./modules/Navbar";
import backgroundImage from "./images/3d-dark-grunge-display-background-with-smoky-atmosphere.jpg";
function App() {
  return (
    <div
      className="w-full h-full bg-[#0e0d0d] "
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<TitlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
