import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./page/home.jsx"
import Navbar from "./components/navbar/"
import Footer from "./components/footer/index.jsx";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
