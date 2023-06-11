import React from 'react';
import './about.css';
import ME from '../../assets/memoji-iman.jpeg';
import { HiDesktopComputer, HiOutlineFolderOpen } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';

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
          {/* <div className="about__cards">
            <article className='about__card'>
              <HiDesktopComputer className='about__icon' />
              <h5>Experience</h5>
              <small>7+ working experience</small>
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
          </div> */}

          <article>
            Hello! I'm Iman, a self-taught developer with a passion for creating dynamic and user-friendly web applications. With 7 years of working experience in the industry, I've had the opportunity to explore various domains and technologies. <br /><br />
            During my journey, I delved into the realm of cloud computing for 2 years, honing my skills in leveraging the power of platforms like AWS. Additionally, I dedicated 1 year to iOS development, mastering the art of building sleek and intuitive mobile applications. The rest of my experience has been focused on front-end development, where I have become proficient in ReactJS, HTML, CSS, JavaScript, and Material UI. <br /><br />
            While I have a strong foundation in front-end development, my main goal is to evolve into a full-stack developer. I've dabbled in backend technologies, including NodeJS, ExpressJS, and MongoDB, which have enabled me to develop a holistic understanding of web application architecture. <br /><br />
            My background in graffiti has had a significant impact on my work as a developer. It has sharpened my eye for aesthetics and helped me craft visually appealing and intuitive UI/UX experiences for my clients. I believe that the fusion of art and technology creates the perfect harmony in the digital world. <br /><br />
            With each project, my aim is to create elegant, efficient, and user-centric solutions that meet my clients' needs. I take pride in my ability to understand their vision and translate it into functional code. My commitment to continuous learning ensures that I stay up-to-date with the latest industry trends and best practices. <br /><br />
            I'm excited about the opportunity to collaborate with like-minded individuals and organizations to create remarkable digital experiences. If you're interested in working together or have any questions, feel free to reach out to me through the contact information provided below.<br /><br />
            Thank you for visiting my portfolio, and I look forward to connecting with you!<br /><br /></article>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;