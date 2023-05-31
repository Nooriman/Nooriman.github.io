import React from 'react';
import "./testimonial.css";
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVATAR1,
    name: 'Time Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro adipisci deserunt ipsum blanditiis in, atque debitis, voluptatum ab ducimus harum necessitatibus. Ullam aliquid cupiditate mollitia quis, vitae quasi ipsam.'
  },
  {
    avatar: AVATAR2,
    name: 'Time Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro adipisci deserunt ipsum blanditiis in, atque debitis, voluptatum ab ducimus harum necessitatibus. Ullam aliquid cupiditate mollitia quis, vitae quasi ipsam.'
  },
  {
    avatar: AVATAR3,
    name: 'Time Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro adipisci deserunt ipsum blanditiis in, atque debitis, voluptatum ab ducimus harum necessitatibus. Ullam aliquid cupiditate mollitia quis, vitae quasi ipsam.'
  },
  {
    avatar: AVATAR4,
    name: 'Time Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro adipisci deserunt ipsum blanditiis in, atque debitis, voluptatum ab ducimus harum necessitatibus. Ullam aliquid cupiditate mollitia quis, vitae quasi ipsam.'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >

        {data.map(({ avatar, name, review }, idx) =>
          <SwiperSlide className="testimonial" key={idx}>
            <div className="client__avatar">
              <img src={avatar} alt='client 1' />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  )
}

export default Testimonial;