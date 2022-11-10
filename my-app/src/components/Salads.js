import React from 'react'
import {NavLink,Routes,Route} from 'react-router-dom';
import FullRecipe from './FullRecipe';

function Salads() {
  return (
    <div className='heading-section'>
    <h1>Salad Recipes</h1>
    <div className='grid-section'>
        <div ><NavLink to='/salads/summer-salad' ><img src={require('../images/summer-salad.webp')} alt='summer-salad' />
            <p>Summer Salad</p></NavLink>
        </div>
        <div><NavLink to='/salads/chicken-satay-salad' ><img src={require('../images/chicken-satay-salad.webp')} alt='chicken-satay-salad' />
            <p>Chicken Satay Salad</p></NavLink> </div>
        <div><NavLink to='/salads/couscous-salad' ><img src={require('../images/couscous-salad.webp')} alt='couscous-salad' />
            <p>Couscous Salad</p></NavLink></div>
    </div>

    <Routes >
        <Route path='/:recipe' element={<FullRecipe />} />
    </Routes>
</div>

  )
}

export default Salads
