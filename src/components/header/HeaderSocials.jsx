import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/noorimannoor/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/Nooriman' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials;