import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Start } from '../components/Start';
import { Catalog } from '../components/Catalog';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Services } from '../components/Services';
import { Footer } from '../components/layout/Footer';
import { Error } from '../components/Error';
import { Project } from '../components/Project';
import { StonesCatalog } from '../components/StonesCatalog';


export const MyRoutes = () => {
  return (

    <BrowserRouter>
      {/* Header & navigation */}
      <HeaderNav />
    
      {/* Main content */}
      <section className="content">
        <Routes>
          {/* navbar routes */}
          <Route path="/" element={<Navigate to="/start" />} />
          <Route path="/start" element={<Start />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/stones" element={<StonesCatalog />} />
          <Route path="/contact" element={<Contact />} />

          {/* work item routes */}
          <Route path="/project/:id" element={<Project/>} />

          {/* error route */}
          <Route path="*" element={<Error />} />
        </Routes>
      </section>


      {/* Footer */}

      <Footer />

    </BrowserRouter>

  )
}
