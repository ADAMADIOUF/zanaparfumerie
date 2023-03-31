import React from 'react'
import { Link } from 'react-router-dom'
import { social } from '../dataNav'
import h from "../assets/a8.jpg"
const Hero = () => {
  return (
    <div className='hero section-center'>
      <div className='hero-container'>
        <div className='img-hero'>
          <ul className='social-links'>
            {social.map((link) => {
              const { url, icon, id } = link
              return (
                <li key={id}>
                  <Link to={url}>{icon}</Link>
                </li>
              )
            })}
          </ul>
          <img src={h} alt='' />
        </div>
      </div>
      <div className='hero-content'>
        <h3>Le parfum, une structure olfactive bien particulière</h3>
        <p>
          Comme une seconde peau, votre parfum révèle votre personnalité, vos
          goûts et votre état d'esprit. Pour trouver la fragrance idéale, vous
          devrez vous laisser guider par ses notes. Vous ne savez pas par où
          commencer ? Nous vous donnons de nombreux conseils pour choisir la
          bonne senteur.
        </p>
        <a href={`/shop/`}>
          <button className='btn btn-hero'>acheter</button>
        </a>
      </div>
    </div>
  )
}

export default Hero