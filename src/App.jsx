import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from "./modules/TitlePage";
import Navbar from "./modules/Navbar";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./modules/ContactUs";
import { ToastContainer } from "react-toastify";
import backgroundImage from "./images/27230.jpg";
function App() {
  return (
    <div
      className="w-full h-full bg-[#0e0d0d] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
