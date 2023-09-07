
import Card from 'react-bootstrap/Card';
import '../styles/profile.css'; 
import { BsGithub } from 'react-icons/bs';
import { useSelector } from 'react-redux';



const HighProfile = () => {
  const { top } = useSelector((state) => state.top);

  return (
    <section id="high-profile">
      <div className='high-profile'>
        <div className='high-cont '>
          <div className='mask'></div>
          <h2 className='h2-top'>my top projects</h2>

       
          {top.map((project, index) => (
            <Card className='card-cont' key={index}>
              <Card.Img className='card-img' variant="left" src={project.imageUrl} alt='img' />
              <Card.Body className='card-body-profile'>
                <Card.Title className='profile-title'>{project.title}</Card.Title>
                <Card.Text className='profile-text'>
                  {project.description}
                </Card.Text>
                <button type="button" className="btn-see-more git">
                  See GitRepo
                  <BsGithub className="git-icon" />
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighProfile;
