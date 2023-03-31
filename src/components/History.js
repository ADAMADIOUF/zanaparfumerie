import React from 'react'

const History = () => {
  return (
    <div className='section-center history'>
      <div className='title title-history'>
        <h3>
          Quelle est la classification olfactive des ingrédients et des parfums
          ?
        </h3>
      </div>
      <p>
        Il existe littéralement des milliers d'ingrédients parfumés et
        probablement un nombre similaire de parfums finis. Un parfum de couture
        luxueux et sophistiqué se compose généralement de 50 à 200 matières
        premières odorantes différentes. Les classifications olfactives ont été
        introduites pour structurer ces matières premières et créer un "langage"
        qui nous permette de parler à la fois des matières premières odorantes
        et des mélanges de parfums. L'avantage d'utiliser des ingrédients et des
        classes pour décrire les parfums est qu'ils introduisent un certain
        degré d'objectivité. Les parfums sont une expérience subjective et
        sensuelle qui est unique pour chacun d'entre nous et il est très
        difficile de la communiquer de manière transparente.
      </p>
      <div className='history-img'>
        <div className='first-img'>
          <img
            src='https://images.pexels.com/photos/10786706/pexels-photo-10786706.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
          />
        </div>
        <div className='second-img'>
          <img
            src='https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default History