
import HomePage from './page/HomePage';
import About from './page/About';
import Code from './page/Code';
import Contact from './page/Contact';
// import ContactUs from './page/ContactUs.js';
import Challenges from './page/Challenges';
import ChallengeOne from './challenges/ChallengeOne';
import Update from './page/Update';
// import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogArtical from './blog/BlogArtical';
import Blog from './page/Blog';



function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<HomePage/>}> </Route>
          <Route path="/About" element={<About/>}> </Route>
          <Route path="/Code" element={<Code/>}> </Route>
          <Route path="/Blog" element={<Blog/>}> </Route>
          <Route path="/BlogArtical" element={<BlogArtical/>}> </Route>
          <Route path="/Contact" element={<Contact/>}> </Route>
          <Route path="/Challenges" element={<Challenges/>}> </Route>
          <Route path="/ChallengeOne" element={<ChallengeOne/>}> </Route>
          <Route path="/Update" element={<Update/>}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
