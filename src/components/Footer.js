import React from 'react'
import { Link } from 'react-router-dom'
import { social,links } from '../dataNav'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='section-center footer-container'>
        <article className='footer-links'>
          <div>
            <ul className='footer-link'>
              {social.map((link) => {
                const { url, icon, id } = link
                return (
                  <li key={id}>
                    <Link to={url}>{icon}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <div className='logo footer-logo'>
              <img src={logo} alt='' className='logo' />
            </div>
          </div>
        </article>
        <article className='footer-contact'>
          <ul className='footer-links-nav'>
            {links.map((link) => {
              const { text, url, id } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </article>
        <article className='contact-footer-1'>
          <h3>contact us</h3>
          <p>senegal,dakar</p>
          <p>+221775552646</p>
        </article>
      </div>
      <div className='footer-date'>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> by adamadiouf2017@gmail.com</span>
        </h5>
      </div>
    </div>
  )
}

export default Footer