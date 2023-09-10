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

  const { projectData } = useProjectData();
  console.log(projectData);

  return (
    <div className='project-info-details'>
   
   <div className='scrollable-container'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
          
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={90}
        // spaceBetween={0}
        slidesPerView={2}
        direction={'vertical'}
        // direction="vertical"
   
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className='image-stack_item'>
            <img className='project-img-1' src={projectData.imageProjectItem1} alt='img' />
          </div>
          
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='image-stack_item'>
            <img className='project-img-2' src={projectData.imageProjectItem2} alt='img' />
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
          <div className='image-stack_item'>
            <img className='project-img-3' src={projectData.imageProjectItem3} alt='img' />
          </div>

        </SwiperSlide>
   
      </Swiper>
    </div>


      <div className='desc-text-info-details static'>
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
   
    </div>
  );
};

export default ProjectInfo;
