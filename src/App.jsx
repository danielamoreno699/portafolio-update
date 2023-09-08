import Navbar from './components/Navbar'

import { useState } from 'react';
import  Hero  from './components/Hero'
import Cards from './components/Cards'
import Modal from './components/Popup'
import Skills from './components/skills';
import Aboutme from './components/aboutme';
import HighProfile from './components/HighProfile';
import Contact from './components/Contact';
import './styles/App.css'






function App() {
  const [isOpen, setIsOpen] = useState(false);
  const pdfPath = '../../cv.pdf'

  return (
    <>
      
        <Navbar/>
        <Hero/>
        <Aboutme setIsOpen={setIsOpen}/>
        {isOpen && <Modal setIsOpen={setIsOpen} pdfPath={pdfPath}/>}
        <HighProfile/>
        <Cards  />
        <Skills/>
        <Contact/>
        

 

       

     
   
    </>
  )
}

export default App
