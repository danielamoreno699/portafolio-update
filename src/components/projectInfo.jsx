import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';
import { useProjectData } from '../context/contextManager';
import '../styles/projectInfo.css'

const ProjectInfo = () => {

  const { projectData } = useProjectData();
  console.log(projectData);

  return (
    <div className='project-info-details'>
        
      {/* <h3>{projectData.name}</h3>
      */}
      
      <div className='image-stack'>
        <div className='image-stack_item_top'>
        <img className='project-img-1' src={projectData.imageProjectItem1} alt='img' />
        </div>
        <div className='image-stack_item_bottom'>
        <img className='project-img-2' src={projectData.imageProjectItem2} alt='img' />
        </div>
      </div>


      <div className='desc-text-info-details'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, expedita!</p>
          <div className="btns">
        <button type="button" className="btn-see-more live">
          See live
          <CgLivePhoto className="live-icon" />
        </button>
        <button type="button" className="btn-see-more git">
          See GitRepo
          <BsGithub className="git-icon" />
        </button>
      </div>

      </div>
      
      
      
      {/* <div className="btns">
        <button type="button" className="btn-see-more live">
          See live
          <CgLivePhoto className="live-icon" />
        </button>
        <button type="button" className="btn-see-more git">
          See GitRepo
          <BsGithub className="git-icon" />
        </button>
      </div> */}
    </div>
  );
};

export default ProjectInfo;
