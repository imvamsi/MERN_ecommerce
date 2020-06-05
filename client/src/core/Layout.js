import React from 'react'
import Menu from './Menu'

const Layout = ({title, description, className, children}) => {
    return (
        <div>
            <Menu/>
            <div className="jumbotron">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
