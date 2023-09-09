
import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';


const ProjectInfo = ({ project }) => {
  return (
    <div className='project-info'>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

     

      <div className="btns">
            <button type="button" className="btn-see-more live" >
              See live
              <CgLivePhoto className="live-icon" />
            </button>
            <button type="button" className="btn-see-more git" >
              See GitRepo
              <BsGithub className="git-icon" />
            </button>
        </div>
    </div>
  );
};

export default ProjectInfo;
