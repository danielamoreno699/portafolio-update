import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';
import { useProjectData } from '../context/contextManager';


const ProjectInfo = () => {

  const { projectData } = useProjectData();
  console.log(projectData);

  return (
    <div className='project-info'>
      <h3>{projectData.name}</h3>
      <p>{projectData.description}</p>
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
  );
};

export default ProjectInfo;
