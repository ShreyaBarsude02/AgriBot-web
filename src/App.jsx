import Navbar from "./components/Navbar";
import HerbicideGuide from "./pages/HerbicideGuide";
import HerbicideInfo from "./pages/HerbicideInfo";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeedInfo from "./pages/WeedInfo";
import LivePrices from "./pages/Liveprices";
import Notification from "./pages/Notification";

function App() {
  

  return (
    <Router>
       
     <Navbar/>
      {/* <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/weed-herbicide-guide" element={<HerbicideGuide />} />
            <Route path="/weed-herbicide-guide/herbicide-info" element={<HerbicideInfo />} />
            <Route path="/weed-herbicide-guide//weed-info" element={<WeedInfo />} />
            <Route path="/liveprices" element={<LivePrices />} />
            <Route path="/govt-notification" element={<Notification />} />
          </Routes>
        </Router>
  )
}

export default App
