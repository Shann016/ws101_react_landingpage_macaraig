import React from 'react';
import Background from './Background';
import NavBar from './Navbar';
import Home from './Home';
import Info from './Info';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';



const App = () => {
  return (
    <div>
      <Background />
      <NavBar />
      <Home />
      <Info />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
