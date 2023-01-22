import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio11.jpg'
import IMG2 from '../../assets/portfolio22.jpg'
import IMG3 from '../../assets/portfolio33.jpg'
import IMG4 from '../../assets/portfolio44.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio66.jpg'

/*
Welcome to my UI/UX portfolio, built with React.js. This portfolio showcases my skills in 
user-centered design and front-end development. 
It includes a selection of projects that demonstrate my ability to create intuitive and 
visually appealing interfaces.  The portfolio is built using React, a JavaScript library 
for building user interfaces. It is fully responsive and optimized for performance. 
It also includes accessibility features to ensure that it is inclusive for all users.  
Please feel free to explore the code and leave any feedback or suggestions. 
Thank you for visiting and I hope you enjoy my portfolio! If you have any feedback or suggestions, 
please don't hesitate to reach out to me via email at rejoiceoedokpayi@gmail.com or by connecting with 
me on LinkedIn https://www.linkedin.com/in/rejoicedokpayi/
*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'rejFinance - UX Fintech Case Study ',
    github: 'https://www.figma.com/file/oW4tuRAe6Yv9Yuf5ehqsJ3/Stock-Investment-App?node-id=35%3A2&t=7OP03okzLDhWBRF3-1',
    demo: 'https://www.behance.net/gallery/149609173/rejFinance-FinTech-App'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Rejoice Weather App',
    github: 'https://www.behance.net/rejoiceedokpayi',
    demo: 'https://www.behance.net/gallery/152257473/Rejoice-Weather-App'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Uniswap Cloned UI Design',
    github: 'https://www.behance.net/rejoiceedokpayi',
    demo: 'https://www.behance.net/gallery/152261791/ChainSwap-Mobile-Version-Of-The-Cloned-dApp-Exchange'
  },
  {
    id: 4,
    image: IMG4,
    title: 'HooBank React Home Page',
    github: 'https://github.com/rejoicedo/Bank_appReact',
    demo: 'https://bank2react.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Spotify Cloned React App',
    github: 'https://github.com/rejoicedo/spotify_Clone_React',
    demo: 'https://spotify2react.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Full MERN Event App',
    github: 'https://github.com/rejoicedo',
    demo: 'https://mabotaevents.com/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Source</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio