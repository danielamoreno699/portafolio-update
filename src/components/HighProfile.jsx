
import Card from 'react-bootstrap/Card';
import '../styles/profile.css'; 

import { useSelector } from 'react-redux';



const HighProfile = () => {
  const { top } = useSelector((state) => state.top);

  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <section id="high-profile">
      <div className='high-profile'>
        <div className='high-cont '>
        
          <div className='mask'></div>
          <h2 className='h2-top'>My Top Projects</h2>
     
          
          

       <div className='card-profile'>
          {top.map((project, index) => (
            <Card className='card-cont' key={index}>
              <Card.Img className='card-img' variant="left" src={project.image} alt='img' />
              <Card.Body className='card-body-profile'>
                <Card.Title className='profile-title' onClick={() => handleClick(project.id)}>{project.name}</Card.Title>
                <Card.Text className='profile-text'>
                  {project.description}
                </Card.Text>

            <div className='lang-container'>

                <div className="languages">
            {project.technologies.map((technology, index) => (
              <li className="li-lang" key={index}>
                {technology}
              </li>
            ))}
          </div>
             

          </div>
              </Card.Body>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export default HighProfile;
