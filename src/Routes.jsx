import React from 'react'
import {
   BrowserRouter as Router,
   Route,
   Switch,
   useHistory
} from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat'
   

const Routes = () => {

   const history = useHistory()

   return (
      <Router history={history}>
         <Switch>
            <Route exact path="/" ><Login /></Route>
            <Route exact path="/home"><Home user='TAGUARA DIGITAL' /></Route>
            <Route exact path="/chat"><Chat user='TAGUARA DIGITAL' /></Route>
         </Switch>
      </Router>
   )
}

export default Routes
