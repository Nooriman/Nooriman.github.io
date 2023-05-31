import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { HiDesktopComputer, HiOutlineFolderOpen} from 'react-icons/hi';
import { FiUsers} from 'react-icons/fi';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='me' width='100%' />
          </div>
        </div>


      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <HiDesktopComputer className='about__icon' />
            <h5>Experience</h5>
            <small>3+ working experience</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>200++ Clients</small>
          </article>
          <article className='about__card'>
            <HiOutlineFolderOpen className='about__icon' />
            <h5>Project</h5>
            <small>80+ Completed</small>
          </article>
        </div>

        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About;