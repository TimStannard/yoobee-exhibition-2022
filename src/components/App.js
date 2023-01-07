// css
import '../css/main.css'
// import dependencies
import { HashRouter, Routes, Route } from "react-router-dom";
// import utils
import ScrollToTop from "../util/ScrollToTop";
// import components
import Footer from './Footer'
import Navbar from './Navbar'
// pages
import Home from '../pages/Home'
import WebUx from '../pages/WebUx'
import Student from '../pages/Student'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
        <Route path="/webUx" element={<WebUx />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
