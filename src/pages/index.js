import React, { useState } from 'react'
import Navbar from '@/components/home/Navbar'

import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Project from '@/components/home/Project'
import Footer from '@/components/Footer'

export default function index() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <Hero />
      </section>
      <section className="about">
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,154.7C672,107,768,53,864,48C960,43,1056,85,1152,85.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <section className="projects">
        <Project />
      </section>
      <Footer />
    </>
  )
}