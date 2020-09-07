import React from 'react'
import Cat from './components/Cat/Cat'
import './Home.scss'

const Home = ( {user} ) => {
   return (
      <div className='home'>
         <div className='home__content'>
            <h1 className='home__title'>TAGUARA DIGITAL</h1>
            <h2 className='home__subtitle'> Chat Bot</h2>
            <Cat />
            <div className='home__greeting'>
               <h2 className='home__subtitle'> hello, {user}!</h2>
               <label> {'Do you want to talk?'} </label>
               <label> {'Click over me to start:)'} </label>
            </div>
         </div> 
      </div>
   )
}

export default Home
