import React from 'react'
import './CatItems.scss'

import Avatar from '../../../assets/img/favicon.png'

const CatItems = () => {
   return (
      <div className='catitems-container'>
         <img src={Avatar} alt="Avatar"/>
         <div className="catitems__msg">
            <label>Msg 1</label>
         </div>
      </div>
   )
}

export default CatItems
