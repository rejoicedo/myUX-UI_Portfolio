import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';







const data = [
  {
    avatar: AVTR1,
    name: 'Jerry Eze',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore aperiam sint repellat?'
  },
  {
    avatar: AVTR2,
    name: 'Jerry Eze',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore aperiam sint repellat?'
  },
  {
    avatar: AVTR3,
    name: 'Jerry Eze',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore aperiam sint repellat?'
  },
  {
    avatar: AVTR4,
    name: 'Jerry Eze',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore aperiam sint repellat?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container">
        <Swiper className=" testimonials__container"
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt='' />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>

    </section>
  )
}

export default Testimonials