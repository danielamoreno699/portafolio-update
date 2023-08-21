
import Card from 'react-bootstrap/Card';
import '../styles/profile.css'; // Make sure to adjust the path based on your file structure
import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';

const HighProfile = () => {

    



  return (
    <section id="high-profile">
        
      <div className='high-profile'>
     
        <div className='high-cont ' >
        <div className='mask'></div>
        <h2>my top projects</h2>
        
        
          <Card className='card-cont' >
            <Card.Img className='card-img' variant="left" src="path/to/your/image.jpg" /> 
            <Card.Body className='card-body'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur! Nihil cum facilis odit nam omnis doloremque laborum minima impedit.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi minus porro beatae quaerat omnis qui totam fugit debitis nobis quasi.
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptate nam reiciendis dicta. Perferendis odit praesentium voluptas culpa corrupti reprehenderit?
              </Card.Text>
              <button type="button" className="btn-see-more git" >
              See GitRepo
              <BsGithub className="git-icon" />
            </button>
            </Card.Body>
        
          </Card>

          <Card className='card-cont' >
            <Card.Img className='card-img' variant="left" src="path/to/your/image.jpg" /> 
            <Card.Body className='card-body'>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consequuntur! Nihil cum facilis odit nam omnis doloremque laborum minima impedit.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi minus porro beatae quaerat omnis qui totam fugit debitis nobis quasi.
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptate nam reiciendis dicta. Perferendis odit praesentium voluptas culpa corrupti reprehenderit?
              </Card.Text>
              <button type="button" className="btn-see-more git" >
              See GitRepo
              <BsGithub className="git-icon" />
            </button>
            </Card.Body>
        
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HighProfile;
