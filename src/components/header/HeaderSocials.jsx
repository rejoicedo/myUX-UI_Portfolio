import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/rejoicedokpayi/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/rejoicedo" target="_blank"><FaGithub /></a>
        <a href="https://www.behance.net/rejoiceedokpayi" target="_blank"><FaBehance /></a>
    </div>
  )
}

export default HeaderSocials