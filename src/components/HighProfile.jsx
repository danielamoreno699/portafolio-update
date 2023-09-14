import Card from 'react-bootstrap/Card';
import '../styles/profile.css'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useProjectData } from '../context/contextManager'; 



const HighProfile = () => {
  const { setProjectData } = useProjectData();

  const navigate = useNavigate();
  const { top } = useSelector((state) => state.top);

  const handleClick = (project) => {
    navigate(`/projectItem/${project.id}`);
    setProjectData(project);
    console.log(project.id)
  }

  return (
    <section id="high-profile">
      <div className='high-profile'>
        <div className='high-cont '>
        
          <div className='mask'></div>
          <h2 className='h2-top'>My Top Projects</h2>
     
          
          

       <div className='card-profile'>
          {top.map((project, index) => (
            <Card className='card-cont' key={index} onClick={() => handleClick(project)}>
              <Card.Img className='card-img' variant="left" src={project.image} alt='img' />
              <Card.Body className='card-body-profile'>
                <Card.Title className='profile-title' onClick={() => handleClick(project)}>{project.name}, click me</Card.Title>
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