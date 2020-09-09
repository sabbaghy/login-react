import React from 'react'
import './InputChat.scss'

const InputChat = ({sendMsg, getMeMsg, msg, chat }) => {
   return (
      <form className='chat__form'
         onSubmit={(e) => sendMsg(e)}
      >
         <input
            disabled={(chat.length > 2) ? true : false}
            type='text'
            placeholder={(chat.length > 2) ? 'cerrado ' : 'Ingresar datos'}
            className=''
            value={msg.msg}
            onChange={ (e) => getMeMsg(e.target.value)}
         />
         <button> Send </button>
      </form>
   )
}

export default InputChat
