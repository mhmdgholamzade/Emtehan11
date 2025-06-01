import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutList from './Components/AboutList';
import Blog from './Components/Blog';
import About from './Components/About';
import Skill from './Components/Skill';
import Services from './Components/Services';
import Counts from './Components/Counts';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Ready from './Components/Ready';
import Prices from './Components/Prices';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Preloader from './Components/Preloader';
import Navgition from './Components/Navgition';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MapLoc from './Components/MapLoc';
import Proces from './Components/Proces';
import TestImonials from './Components/TestImonials';
import Layout from './Components/Layout';
import HomePage from './Components/HomePage';


function HomePage() {
  return (
    <>
    <Preloader/>
    <Navgition/>
    <Header/>
      <About title="Who We Are" subtitle="Empower your life">
        <p style={{ color: "gray" }}>
          This is a dynamic child paragraph passed to the component.
        </p>
      </About>
      <AboutList />
      <Skill />
      <Services />
      <Counts />
      <Portfolio />
      <Team />
      <Ready />
      <Prices />
      <Proces/>
      <TestImonials/>
      <Clients />
      <Contact />
      <MapLoc/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutList />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
