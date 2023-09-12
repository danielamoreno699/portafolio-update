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


import { Routes, Route } from 'react-router-dom';
import ProjectInfo from './components/projectInfo';
import Thanks from './components/thanks';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const pdfPath = '../../cv.pdf'

  return (
    <>
        
        <Navbar/>
      <Routes>

  
        <Route path="/" element={
          <div>
            <Hero/>
            <Aboutme setIsOpen={setIsOpen}/>
            {isOpen && <Modal setIsOpen={setIsOpen} pdfPath={pdfPath}/>}
            <HighProfile/>
            <Cards/>
            <Skills/>
            <Contact/>
          </div>
        }/>

        <Route path="projectItem/:id" element={<ProjectInfo/>}/>

        <Route path="thanks" element={<Thanks/>}/>
      </Routes>
        

 

       

     
   
    </>
  )
}

export default App
