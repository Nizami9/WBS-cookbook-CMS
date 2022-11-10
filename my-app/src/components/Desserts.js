import React from 'react'
import {NavLink,Routes,Route} from 'react-router-dom';
import FullRecipe from './FullRecipe';

function Desserts() {
  return (
    <div className='heading-section'>
    <h1>Desserts</h1>
    <div className='grid-section'>
        <div ><NavLink to='/desserts/strawberry-mousse' ><img src={require('../images/Strawberry-mousse.webp')} alt='strawberry-mousse' />
            <p>Strawberry mousse</p></NavLink>
        </div>
        <div><NavLink to='/desserts/tiramisu' ><img src={require('../images/tiramisu.webp')} alt='tiramisu' />
            <p>Tiramisu</p></NavLink> </div>
     
    </div>

    <Routes >
        <Route path='/:recipe' element={<FullRecipe />} />
    </Routes>
</div>
  )
}

export default Desserts
