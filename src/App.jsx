import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import OurTeam from './pages/OurTeam';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="/work" element={<Works />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/team" element={<OurTeam />} />
         <Route path="/about" element={<About />} /> 
         <Route path="/contact" element={<Contact />} />
         
         <Route path="/blog" element={<Blog />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
