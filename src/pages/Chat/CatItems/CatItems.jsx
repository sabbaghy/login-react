import React from 'react'
import './CatItems.scss'

import Avatar from '../../../assets/img/favicon.png'

const CatItems = ( {text} ) => {
   
   return (
      <div className='catitems-container'>
         <img src={Avatar} alt="Avatar"/>
            <div className="catitems__msg">
               {
                  text.map((msg, i) => 
                     <label key={i}>{msg}</label>
                  )
               }
            </div>
      </div>
   )
}

export default CatItems
