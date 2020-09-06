import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Login.scss'

import Title from './components/title/Title'
import Label from './components/label/Label'
import Input from './components/inputs/Input'

const Login = () => {

   const [user, setUser] = useState('')
   const [password, setPassword] = useState('')
   // const [isError, setIsError] = useState({user: false, password:false})
   const [passwordError, setPasswordError] = useState(false)
   const history = useHistory()

   function handleChange(name, value) {

      if(name === 'user'){
         setUser( value )
      } else{
         if(value.length < 6){
            setPasswordError(true)
         } else{
            setPasswordError(false)
            setPassword( value )
         }
      }
   }
   
   function handleSubmit () {

      history.push('/home')

      let account = {user, password}
      
      if(account){
         ifMatch(account)
      }
   }

   function ifMatch(){
      
   }

   return (
      <div className="login-container">
         <div className="login-content">
            <Title  text={'Welcome!'}/>
            <div>
               <Label  text={'User'}/>
               <Input
                  attribute={{
                     id: 'user',
                     name: 'user',
                     placeholder: 'Enter your user',
                     type: 'text'
                  }}
                  handleChange={handleChange}
               />
            </div>
            <div>
               <Label  text={'Password'}/>
               <Input
                  attribute={{
                     id: 'password',
                     name: 'password',
                     placeholder: 'Enter your password',
                     type: 'password'
                  }}
                  handleChange={handleChange}
                  param={passwordError}
               />
            </div>
            {
               passwordError &&
                  <label className="label-error">
                     Error... Password must be larger than 6 characters
                  </label>
            }

            <div className="submit-btn-container">
               <button
                  className="btn"
                  onClick={handleSubmit}
               >
                  Login
               </button>
            </div>
         </div>
      </div>
   )
}

export default Login
