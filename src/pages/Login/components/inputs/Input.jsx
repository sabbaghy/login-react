import React from 'react'

import './Input.scss'

const Input = ( {attribute, handleChange, param } ) => {
   return (
      <div className="input">
         <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={ (e) => handleChange (e.target.name, e.target.value) }
            className= {(!param) ? 'regular-style' : 'regular-style regular-style--errors'}
         />
      </div>
   )
}

export default Input
