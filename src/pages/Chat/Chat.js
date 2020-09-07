import React from 'react'

import './Chat.scss'
import CatItems from './CatItems/CatItems'
const Chat = ({user}) => {
   return (
      <div className='chat'>
         <div className='chat__content'>
            <div className='chat__chat'>
               <div className='chat__body'>
                  <CatItems />
               </div>
            </div>
         </div> 
      </div>
   )
}

export default Chat
