import React from 'react'
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/Dashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './components/categories/AddCategory'

const Routes = () => {
    return (
       <Router>
          <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signup' component={SignUp}/>
                <PrivateRoute path='/user/dashboard' exact component={Dashboard}/>
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard}/>
                <AdminRoute path='/category/create' exact component={AddCategory}/>
            </Switch>
          </div>
       </Router>
        
    )
}

export default Routes
