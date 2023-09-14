import { BsGithub } from 'react-icons/bs';
import { CgLivePhoto } from 'react-icons/cg';
import { useProjectData } from '../context/contextManager';
import '../styles/projectInfo.css'



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const ProjectInfo = () => {

  const handleSeeLive = () => {
    window.location.href = projectData.demoLink;
   
  };

  const handleSeeRepo = () => {
    window.location.href = projectData.repoLink;
  };

  const { projectData } = useProjectData();
  console.log(projectData);

  return (
    <div className='project-info-details'>
     
   
   <div className='scrollable-container'>
   <Swiper className='swiper-project-info'
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  spaceBetween={0}
  slidesPerView={2}
  direction={'vertical'}
>
  {projectData.imageProjectItem1 && (
    <SwiperSlide>
      <div className='image-stack_item'>
        <img className='project-img-1' src={projectData.imageProjectItem1} alt='img' />
      </div>
    </SwiperSlide>
  )}

  {projectData.imageProjectItem2 && (
    <SwiperSlide>
      <div className='image-stack_item'>
        <img className='project-img-2' src={projectData.imageProjectItem2} alt='img' />
      </div>
    </SwiperSlide>
  )}

  {projectData.imageProjectItem3 && (
    <SwiperSlide>
      <div className='image-stack_item'>
        <img className='project-img-3' src={projectData.imageProjectItem3} alt='img' />
      </div>
    </SwiperSlide>
  )}

  {projectData.imageProjectItem4 && (
    <SwiperSlide>
      <div className='image-stack_item'>
        <img className='project-img-4' src={projectData.imageProjectItem4} alt='img' />
      </div>
    </SwiperSlide>
  )}
</Swiper>

    </div>


      <div className='desc-text-info-details static'>
      <h2 className='title-projectinfo-h2'>{projectData.name}</h2>
        <div className='project-info-details-desc'>
           
        <p>{projectData.fullDescription}</p>
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

export default ProjectInfo;
