/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import '../styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const Aboutme = ({setIsOpen}) => {

  const handleSeeMore = () => {
    setIsOpen(true);
    console.log('click')
  }

    return(

      <section id="about-me">
        <div className="container-about">
            <div className="card-about">
            <div className="thumbnail">
          <img className="left-image" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" alt="Thumbnail" />
         </div>
         
         <div className="right">
         <h1 className="heading">More About myself</h1>
         <div className="separator"></div>
         <p className="paragraph-about">
         I am a software developer with a strong background in law and finance. My unique blend of expertise allows me to approach challenges with a holistic perspective.
            <br />
            <br />
            With a genuine passion for technology and innovation, I am eager to contribute my skills and knowledge to your project.
            <br />
            <br />
            I am confident that I can provide valuable insights and help create solutions. Let's work together to drive meaningful change and innovation.
   
         </p>
         
         <ul className='ul-about'>
         <div className='btn-cv-container'>
          <button className='btn-cv' type="button" onClick={handleSeeMore}>see my CV</button>
        </div>
          <li className='li-about'>
          <FontAwesomeIcon icon={faHeart} className="fa fa-heart-o" />
          </li>
          <li className='li-about'>
            <FontAwesomeIcon icon={faEye} className="fa fa-eye" />
          </li>
          <li className='li-about'>
            <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope-o fa-2x"/>
          </li>
          <li className='li-about'>
            <FontAwesomeIcon icon={faShareAlt} className="fa fa-share-alt fa-2x"/>
          </li>
        </ul>
        <div className='fab'>
        <FontAwesomeIcon icon={faArrowDown} className =" fa-arrow-down fa-lg" />
        </div>
         
            </div>

            </div>

        </div>
        </section>
    )

}


 export default Aboutme;

