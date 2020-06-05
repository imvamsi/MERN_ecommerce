import React from 'react'
import {Link, withRouter} from 'react-router-dom'


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
                    <Link class="nav-link" to="/signin" style={isActive(props.history, '/signin')}>Sign In</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/signup" style={isActive(props.history, '/signout')}>Sign Up</Link>
                </li>
            </ul> 
        </div>
    )
}

export default withRouter(Menu);
