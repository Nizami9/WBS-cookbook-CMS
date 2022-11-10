import React from 'react';
import {useParams} from 'react-router-dom'

function FullRecipe() {
    const {category,recipe} =useParams();

    //  fetch the data from contentful checks for an entry title that matches the {recipe} 
    // and display the full recipe
  return (
    <div>
      
       <p>{`Full recipe for ${recipe} will be displayed here`} </p>   
    </div>
  )
}

export default FullRecipe
