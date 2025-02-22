import Navbar from "./components/Navbar";
import HerbicideGuide from "./pages/HerbicideGuide";
import HerbicideInfo from "./pages/HerbicideInfo";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeedInfo from "./pages/WeedInfo";
import LivePrices from "./pages/Liveprices";
import Notification from "./pages/Notification";
import WeedTable from "./components/WeedTable";
import { useEffect } from "react";
import Hardware from "./pages/Hardware";
import Monitoring from "./pages/Monitoring";

function App() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <Router>
      <Navbar />
      {/* Google Translate Dropdown */}
      <div id="google_translate_element" className="flex justify-end p-2"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/weed-herbicide-guide" element={<HerbicideGuide />} />
        <Route path="/weed-herbicide-guide/herbicide-info" element={<HerbicideInfo />} />
        <Route path="/weed-herbicide-guide/weed-info" element={<WeedInfo />} />
        <Route path="/liveprices" element={<LivePrices />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/govt-notification" element={<Notification />} />
        <Route path="/crop/:cropName" element={<WeedTable />} />
        <Route path="/Monitoring" element={<Monitoring />} />
      </Routes>
    </Router>
  );
}

export default App;
