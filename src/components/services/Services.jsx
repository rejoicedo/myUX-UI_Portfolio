import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing & Prototyping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Systems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design Auditing</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Analytics & Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintenance</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT */}
        
      {/* 
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      */}
        {/* END OF BUSINESS DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services