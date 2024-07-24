import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from "./modules/TitlePage";
import Navbar from "./modules/Navbar";
function App() {
  return (
    <div className="w-full h-full bg-fade-black">
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
