import React from 'react'
import './styles.css'

function Home() {
  return (
    <div className='home-section'>
      <div> <p> presenting easy recipes <br /> that anyone can cook !  </p> </div>
       <div><img src={require('../images/home.jpg')} alt='recipebook'/> </div> 
    </div>
  )
}

export default Home
