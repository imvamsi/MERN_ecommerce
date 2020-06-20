import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {showNavLinks} from '../utils/index'

const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render = {
                props => showNavLinks() ? (
                    <Component {...props}/>
                ) : (
                    <Redirect
                        to = {{
                            pathname: '/signin',
                            state: {from: props.location}
                        }}
                    />    
                )
            }
        />
            
        
    )
}

export default AdminRoute
