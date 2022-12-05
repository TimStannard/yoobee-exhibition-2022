// css
import '../css/main.css'
// import dependancies
import { HashRouter, Routes, Route } from "react-router-dom";

// import components
import Footer from './Footer'
import Navbar from './Navbar'
// pages
import Home from '../pages/Home'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
