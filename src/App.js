import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import About from "./components/About"
import Contact from './components/Contact';
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
