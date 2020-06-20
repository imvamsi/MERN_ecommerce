import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { signout } from '../api/index';
import { isAuthenticated, showNavLinks } from '../utils/index'


const isActive =(history, path) => {
    if(history.location.pathname === path) {
        return { color: '#ff9900'};
    } else {
        return { color: '#ffffff'};
    }
}
const Menu = (props) => {
    return (
        <div>
           <ul class="nav bg-primary">
                <li class="nav-item">
                    <Link class="nav-link active" to="/" style={isActive(props.history, '/')}>Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" to="/user/dashboard" style={isActive(props.history, '/user/dashboard')}>Dashboard</Link>
                </li>
                {!showNavLinks() ? 
                    (
                        <>
                        <li class="nav-item">
                        <Link class="nav-link" to="/signin" style={isActive(props.history, '/signin')}>Sign In</Link>
                       </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/signup" style={isActive(props.history, '/signup')}>Sign Up</Link>
                    </li>
                    </>
                    ): (
                        <>
                        <li class="nav-item ">
                        <span class="nav-link text-white" style={{cursor: 'pointer'}} to="/signup" onClick={() => {
                            localStorage.removeItem('sessionToken');
                            props.history.push('/signin')
                        }}>Sign Out</span>
                    </li> 
                    </>
                    )}
                
               
            </ul> 
        </div>
    )
}

export default withRouter(Menu);
