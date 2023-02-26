import React from 'react'
import Navbar from '@/components/contact/Navbar'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/Footer'

export default function contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <Contact />
      </section>
      <Footer />
    </>
  )
}
