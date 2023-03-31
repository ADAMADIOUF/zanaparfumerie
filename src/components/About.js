import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
   useEffect(() => {
     AOS.init({
       offset: 200,
       duration: 1000,
       delay: 50,
       easing: 'ease-in-out',
     })
   }, [])
  return (
    <div className='about section-center'>
      <div className='about-container'>
        <article className='about-img' data-aos='fade-right'>
          <img
            src='https://images.pexels.com/photos/6310591/pexels-photo-6310591.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
          />
        </article>
        <article className='about-content'>
          <div className='title'>
            <h4 data-aos='fade-up'>zana parfumerie</h4>
          </div>
          <p data-aos='fade-up'>
            Il s'agit d'une famille olfactive très vaste et très répandue. Le
            thème principal de chaque création est soit une fleur unique
            (Solifloral), soit un bouquet floral. Elle est généralement divisée
            en fleurs rouges (par exemple, la rose, la violette,...) et en
            fleurs blanches (par exemple, le jasmin, la fleur d'oranger, la
            tubéreuse, l'ylang-ylang, le chèvrefeuille, ...). Certains
            parfumeurs ajoutent une autre sous-catégorie : les fleurs
            blanches-vertes (par exemple le Muguet). Ces fleurs peuvent être
            enrichies de nuances vertes, aldéhydées, fruitées ou épicées.
          </p>
        </article>
      </div>
    </div>
  )
}

export default About