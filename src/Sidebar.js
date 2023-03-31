import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import { links,social } from './dataNav'
const Sidebar = () => {
 const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen?"sidebar showSidebar":"sidebar"}`}>
      <div>
        <button className='btn-close'onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='sidebar-links'>
        {links.map((link) => {
          const { text, url, id } = link
          return (
            <li key={id}onClick={closeSidebar}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
      <ul className=' sidebar-social-links'>
        {social.map((link) => {
          const { url, icon, id } = link
          return (
            <li key={id}>
              <Link to={url}>{icon}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar