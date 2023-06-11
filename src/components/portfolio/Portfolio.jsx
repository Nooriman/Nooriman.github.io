import React from 'react';
import "./portfolio.css";

const data = [
  {
    id: 1,
    // image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    // image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    // image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    // image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    // image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    // image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualisation',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portforlio</h2>
      
      <h4 className='coming-soon'>Coming Soon...</h4>

      <div className="container portfolio__container">
        {/* {data.map(({ id, image, title, github, demo }) =>
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt='img1' />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
        )} */}

      </div>
    </section>
  )
}

export default Portfolio;