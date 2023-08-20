import '../styles/hero.css'
import 'boxicons'




const Hero = () => {
  return (
    <>
    <div className='home'>
    
    <div className="home-content">

            <h1>Hi I'm Daniela</h1>
            <h3>I'm a software developer! </h3>
              <p>I can help you build a product, feature or website look through some of my work and experience! if you like what you see and have a project you need coded, dont hesitate to contact me</p>  
              <div className="btn-box">
            <a href="#">hire me</a>
            <a href="#">lets talk</a>
        </div>
    </div>
    <div className='img-profile'>
      <img src="../../professinal.png" alt="profile" />

    </div>

        <div className='home-sci'>
            <a href=""><box-icon type='logo' name='facebook' className="logo"></box-icon></a>
            <a href=""><box-icon name='twitter' type='logo' className="logo"></box-icon></a>
            <a href=""><box-icon name='github' type='logo' className="logo" ></box-icon></a>
            <a href=""><box-icon name='linkedin' type='logo' className="logo"></box-icon></a>



        </div>
        <div className="home-background"></div>
    </div>
       
        


    </>
  )
}
export default Hero
