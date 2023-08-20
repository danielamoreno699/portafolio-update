import Navbar from './components/Navbar'
import './styles/App.css'
import { useState } from 'react';
import  Hero  from './components/Hero'
import Cards from './components/Cards'
import Modal from './components/Popup'
import Skills from './components/skills';
import Aboutme from './components/aboutme';
import HighProfile from './components/HighProfile';






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
        

 

       

     
   
    </>
  )
}

export default App
