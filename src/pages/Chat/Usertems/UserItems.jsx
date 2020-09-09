import React from 'react'
import './UserItems.scss'

import UserAvatar from '../../../assets/img/favicon.png'


const UserItems = ({text}) => {
   return (
      <div className='useritems-container'>
         <div className="useritems__msg">
            <label>{text}</label>
         </div>
         <img src={UserAvatar} alt="Avatar"/>
      </div>   )
}

export default UserItems
