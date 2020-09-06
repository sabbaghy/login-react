import React from 'react'
import './Chat.scss'

const Chat = ({user}) => {
   return (
      <div>
         <h1> Chat </h1>
         <p> Hablando con {user} </p>
         
      </div>
   )
}

export default Chat
