// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main className="container">
//         <h2 className="main-title">Welcome to Velvet Bistro</h2>
//         <p className="main-text">A culinary journey awaits you.</p>
//       </main>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reservations from './pages/Reservations';

import Events from './pages/Events';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;