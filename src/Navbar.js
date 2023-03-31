import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import {links} from "./dataNav"
import logo from "./assets/logo.png"
const Navbar = () => {
 const{openSidebar}=useGlobalContext()
  return (
    <nav className='nav '>
      <div className='nav-center section-nav'>
        <div className='nav-header'>
          <Link to={`/`}>
            {' '}
            <img src={logo} alt='' className='logo' />
          </Link>
          <button className='btn-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { text, url, id } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar