/* eslint-disable react/no-unescaped-entities */
import '../styles/hero.css'
import 'boxicons'
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
 

};




const Hero = () => {
  return (
    <>
    <div className='home'>
    
    <div className="home-content">

            <h1>Hi I'm Daniela</h1>
            <h3>I'm a software developer! </h3>
              <p>I can help you build a product, feature or website look through some of my work and experience! if you like what you see and have a project you need coded, dont hesitate to contact me</p>  
              <div className="btn-box">
              <a href="#contact-me" onClick={() => scrollToSection('projects')}>Contact me</a>
           
        </div>
    </div>
    <div className='img-profile'>
      <img src="../../professinal.png" alt="profile" />

    </div>

        <div className='home-sci'>
          
            <a href="https://twitter.com/Daniela38932450"><box-icon name='twitter' type='logo' className="logo"></box-icon></a>
            <a href="https://github.com/danielamoreno699"><box-icon name='github' type='logo' className="logo" ></box-icon></a>
            <a href="https://www.linkedin.com/in/daniela-moreno-06a139124/"><box-icon name='linkedin' type='logo' className="logo"></box-icon></a>



        </div>
        <div className="home-background"></div>
    </div>
       
        


    </>
  )
}
export default Hero
