import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
            
          </Routes>
        </Router>
  )
}

export default App
