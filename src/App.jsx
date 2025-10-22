import { useState } from 'react'
import ContactForm from './components/contact/contactForm.jsx'
import Header from './components/header/Header.jsx'
import './App.css'
import Footer from './components/contact/footer.jsx'

function App() {
 

  return (
    <>
    <Header/>
      <ContactForm/>
     <Footer/>
    </>
  )
}

export default App
