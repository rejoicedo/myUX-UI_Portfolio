import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">REJOICEDO</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rejoicedokpayi/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/rejoicedo" target="_blank"><FaGithub /></a>
        <a href="https://www.behance.net/rejoiceedokpayi" target="_blank"><FaBehance /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; REJOICEDO. All rights reerved.</small>
      </div>


    </footer>
  )
}

export default Footer