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

// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import React, { lazy, Suspense } from 'react';


// // Lazy-loaded components
// const Overview = lazy(() => import('./components/main-components/Overview').then(module => ({ default: module.Overview })));
// const Contact = lazy(() => import('./components/main-components/Contact').then(module => ({ default: module.Contact })));
// const Home = lazy(() => import('./components/main-components/Home').then(module => ({ default: module.Home })));
// const Resume = lazy(() => import('./components/main-components/Resume').then(module => ({ default: module.Resume })));
// const Certificate = lazy(() => import('./components/main-components/Certificate').then(module => ({ default: module.Certificate })));

// function App() {

//   console.log('app.js');

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/overview' element={<Overview />} />
//         <Route path='/resume' element={<Resume />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/certificate' element={<Certificate />} />
//       </Routes>
//     </Suspense>
//   );
// }

// export default App;

