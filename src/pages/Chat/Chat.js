import React, { useState, useEffect } from 'react'

import './Chat.scss'
import CatItems from './CatItems/CatItems'
import UserItems from './Usertems/UserItems'
import InputChat from './InputChat/InputChat'
import Selects from './Selects/Selects'
import {doing, aboutMe} from '../../Data/Responses'

const Chat = ({user}) => {

   let idCounter = 0

   const [msg, setMsg] = useState({})
   const [chat, setchat] = useState([
      {
         id: '1',
         sender: 'Cat',
         msgs:['Hola!', 'Que tal?', 'en que andas?']
      }
   ])
   const [iterations, setIterations] = useState([])
   const [openSelect, setOpenSelect] = useState(false)

   let options =[
      {
         id: 'What are you doing?',
         text: 'Que haces?'
      },
      {
         id: 'Send me a message',
         text: 'Mandame un mensaje'
      },
      {
         id: 'Tell me about you',
         text: 'cuentame sobre ti'
      }
   ]

   function firstResponse(name){
      let newChat = {
         id: idCounter + 2,
         sender: 'Cat',
         msgs:[
            `Mucho Gusto ${name}!` ,
            'Mi nombre es Taguara Digital',
            'pregunta lo que quiera'
         ]
      }

      if(newChat){
         setchat([...chat, newChat])
      }
   }

   useEffect(() => {
      
      if(chat.length === 2) {
         setTimeout(() => firstResponse(msg.msgs), 500)
         setMsg({...msg, msg:''})
         setTimeout(() => setOpenSelect(true),600)
      }
   }, [chat])

   function getMeMsg(value) {
      idCounter = idCounter + 1
      setMsg(
      {
         id: idCounter,
         sender: 'User',
         msgs: value
      })

   }

   function sendMsg(e) {
      e.preventDefault()
      setchat([...chat, msg])
   }

   function handleSelectionOptions(value){

      let result
      switch(value) {
         case 'What are you doing?': 
            result = doing[Math.floor((Math.random() * doing.length))]
            if (result) {
               setIterations([...iterations, result.msg])
            }
            break
         case 'Send me a message': 
            result = doing[Math.floor((Math.random() * doing.length))]
            if (result) {
               setIterations([...iterations, result.msg])
            }
            break
         case 'Tell me about you': 
            result = doing[Math.floor((Math.random() * aboutMe.length))]
            if (result) {
               setIterations([...iterations, result.msg])
            }
            break

         default:
            result = doing.msg[' Que haz hecho hijo mio?']
            setIterations([...iterations, result.msg])
         }
   }

   return (
      <div className='chat'>
         <div className='chat__content'>
            <div className='chat__chat'>
               <div className='chat__body'>
               {
                  chat.map((msg, index) => 
                     (msg.sender === 'Cat') 
                     ? <CatItems key={index} text={msg.msgs} />
                     : <UserItems key={index} text={msg.msgs} />)
               }
               {
                  openSelect && 
                  <Selects
                     handleSelectionOptions={handleSelectionOptions}
                     options={options}
                  />
               }
               {
                  iterations.length > 0 && 
                  iterations.map((iteration, index)=> <>
                     <CatItems key={index} text={iteration} />
                     <Selects
                        handleSelectionOptions={handleSelectionOptions}
                        options={options}
                     />
                  </>)
               }
               </div>
               <div className='chat__input'>
                  <InputChat
                     chat={chat}
                     getMeMsg={getMeMsg}
                     sendMsg={sendMsg  }
                     msg={msg}
                   />
               </div>

            </div>
         </div> 
      </div>
   )
}

export default Chat
