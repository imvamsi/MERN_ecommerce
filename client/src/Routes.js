import React from 'react'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'

const Routes = () => {
    return (
       <Router>
         <Menu/>
          <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signup' component={SignUp}/>
            </Switch>
          </div>
       </Router>
        
    )
}

export default Routes
