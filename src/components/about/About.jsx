import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Rejoice" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          I am a highly skilled UX/UI designer with a passion for creating intuitive and 
          user-centered designs for web and mobile applications. My expertise in UX/UI design 
          is complemented by my passion for business development and front-end development. 
          I have experience in creating wireframes, mock-ups, and high-fidelity prototypes, as well 
          as in conducting user research and usability testing.
          I am also well-versed in front-end development and have expertise in HTML, CSS, JavaScript, 
          and other web development frameworks. This allows me to take an integrated approach to product design, 
          where the design and development process are seamlessly connected, resulting in a better user experience.
          I am always looking for new challenges and opportunities to grow in my field.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About