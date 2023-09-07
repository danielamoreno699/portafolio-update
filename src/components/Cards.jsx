import '../styles/cards.css';
import {  useSelector } from 'react-redux';
import CardItem from "./CardItem"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";





const Cards = () => {

  const {data} = useSelector((state) => state.cards);


  return (
    <section id="projects">
      <div className="projects">
        <h2 className="h2-card">take a look at my projects</h2>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card-container">
                <CardItem card={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Cards