import '../styles/cards.css';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';



const CardItem = ({ card }) => {
 
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSeeLive = () => {
    window.location.href = card.demoLink;
   
  };

  const handleSeeRepo = () => {
    window.location.href = card.repoLink;
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="card" onClick={handleClick} >
      <img
            className="card-image"
            src={card.imageLink } 
            alt=""
            
          />
      <div className="card-content front">
      <img
            className="card-image"
            src={card.imageLink } 
            alt=""
            
          />
        </div>
        <div className={`card-content back ${isFlipped ? '' : 'hidden'}`}>
          <h1 className='card-name-h1'>{card.name}</h1>
          <div className="project-info">
            <li className="li-info">{card.role}</li>
            <li className="li-info">{card.company}</li>
            <li className="li-info">{card.year}</li>
          </div>
          <p>{card.description}</p>
          <div className="languages">
            {card.technologies.map((technology, index) => (
              <li className="li-lang" key={index}>
                {technology}
              </li>
            ))}
          </div>
          <div className="btns">
            <button type="button" className="btn-see-more live" onClick={handleSeeLive}>
              See live
              <CgLivePhoto className="live-icon" />
            </button>
            <button type="button" className="btn-see-more git" onClick={handleSeeRepo}>
              See GitRepo
              <BsGithub className="git-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoLink: PropTypes.string.isRequired,
    repoLink: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
