import './App.css';
import { Routes, Route } from "react-router-dom";

import { Overview } from './components/main-components/Overview';
import { Contact } from './components/main-components/Contact';
import { Home } from './components/main-components/Home';
import { Resume } from './components/main-components/Resume';
import { Certificate } from './components/main-components/Certificate';

function App() {
  console.log('app.js');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/certificate" element={<Certificate />} />
    </Routes>
  );
}

export default App;