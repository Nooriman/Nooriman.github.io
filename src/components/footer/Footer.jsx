import React from 'react';
import "./footer.css";
import { FaFacebookF, FaGithubAlt } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>NOORIMAN NOOR</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://github.com"><FaGithubAlt /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Nooriman Noor. All Rights Reserved </small>
      </div>
    </footer>
  )
}

export default Footer;