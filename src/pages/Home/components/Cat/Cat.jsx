import React from 'react'
import { useHistory } from 'react-router-dom'

import Lottie from 'react-lottie'
import './Cat.scss'
import animationData  from './29001-pet-love.json'

const Cat = () => {
   
   const history = useHistory()

   const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData
      // rendererSettings: {
      //   preserveAspectRatio: 'xMidYMid slice'
      // }
   }

   function handleOnClick()  {
      history.push('/chat')
   }

   return (
      <>
         <div 
            className='cat-container'
            onClick={handleOnClick}
         >
            <Lottie 
               options={defaultOptions}
            />
         </div>
      </>
   )
}

export default Cat