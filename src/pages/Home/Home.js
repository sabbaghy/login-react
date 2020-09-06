import React from 'react'
import Cat from './components/Cat/Cat'
import './Home.scss'

const Home = ( {user} ) => {
   return (
      <div className='home'>
         <h1>TAGUARA DIGITAL</h1>
         <h2> HOME PAGE</h2>
         <Cat />
         <h2> Hola, {user} </h2>
         
         <button 
            className="btn"
            // onClick={handleOnClick}
         >
            Chat
         </button>

      </div>
   )
}

export default Home
