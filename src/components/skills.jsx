import '../styles/skills.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Skills = ({setIsOpen, pdfPath}) => {
  const { stack, pAbout, softSkills, prospect} = useSelector((state) => state.cards);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isContentVisibleSkills, setIsContentVisibleSkills] = useState(false);
  const [isContentVisibleProspects, setIsContentVisibleProspects] = useState(false);

  

  const toggleResume = () => {
    setIsContentVisible(!isContentVisible);
  };

  const toggleSoftSkills = () => {
    setIsContentVisibleSkills(!isContentVisibleSkills);
  }

  const toggleProspects = () => {
    setIsContentVisibleProspects(!isContentVisibleProspects);
  }

  return (
    <>
    <section id="about-skills">
    <h2 className="h2-card">tech-stack & soft skills</h2>
      <div className="skills-container">
    
        <div className="skills-sidebar">
          {/* <h3>About</h3> */}
        <div className="resume">
          <h2 className='about-me'>About Me</h2>
          <hr
            className={isContentVisible ? 'toggle-resume' : ' toggle-resume hidden'}
            onClick={toggleResume}
          />
          <div className="presentation-profile">
              {isContentVisible && pAbout.map((paragraph, index) => (
                <p className="paragraph" key={index}>{paragraph}</p>
              ))}
            </div>
          
        </div>

        <div className='soft-skills'>
          <h2>Soft Skills</h2>
          <hr
            className={isContentVisibleSkills ? 'toggle-softSkills' : 'toggle-softSkills hidden'}
            onClick={toggleSoftSkills}
          />
          {isContentVisibleSkills && (
    <ul className="soft-skills-list">
      {softSkills.map((item, index) => (
        <li key={index}>
          <h5>{item.title}</h5>
          <p className="paragraph">{item.content}</p>
        </li>
      ))}
    </ul>
  )}
        </div>

        <div className='prospect'>
        <h2 >Prospect</h2>
          <hr
             className={isContentVisibleProspects ? 'toggle-prospect' : ' toggle-prospect hidden'}
             onClick={toggleProspects}
          />
           <div className={`presentation-profile ${isContentVisibleProspects ? '' : 'hidden'}`}>
    {isContentVisibleProspects && <p className="paragraph">{prospect}</p>}
  </div>
        </div>

        </div>

       


        <div className="skills">
          {/* <h1>Skills</h1> */}
        
          <div className="skills-content">
            <ul className="skills-ul">
              {stack.map((item) => (
                <li key={item.name}>
                  <img src={item.img} alt={item.name} style={{ backgroundColor: item.color }} />
                  <p >{item.name.toUpperCase()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
      </section>
    </>
  );
};

export default Skills;
