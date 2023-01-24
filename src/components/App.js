// css
import '../css/main.css'
// import dependencies
import { HashRouter, Routes, Route } from "react-router-dom";
// import utils
import ScrollToTop from "../util/ScrollToTop";
import { IdleRedirect } from '../util/IdleRedirect';
// import components
import Footer from './Footer'
import Navbar from './Navbar'
// pages
import Home from '../pages/Home'
import WebUx from '../pages/WebUx'
import Film from "../pages/Film"
import Animation from "../pages/Animation"
import WebStudent from '../pages/WebStudent'
import FilmStudent from '../pages/FilmStudent'
import AnimationStudent from '../pages/AnimationStudent'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <IdleRedirect />
      <Navbar />
      <Routes>
        {/* all our routes go in here */}
        <Route path="/" element={<Home />} />
        <Route path="/webUx" element={<WebUx />} />
        <Route path="/film" element={<Film />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/webUx/student/:name" element={<WebStudent />} />
        <Route path="/film/student/:name" element={<FilmStudent />} />
        <Route path="/animation/student/:name" element={<AnimationStudent />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
