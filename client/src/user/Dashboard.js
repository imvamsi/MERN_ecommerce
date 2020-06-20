import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated, showNavLinks } from '../utils'

const Dashboard = () => {

    // console.log(isAuthenticated)
    const {user} = showNavLinks();
    return (
        <Layout title="Dashboard" description="user dashboard">
           <div className="card mb-5">
               <h5 className="card-header">User info</h5>
               <ul className="list-group">
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                   <li className="list-group-item">{user.role === 0 ? 'Registered user' : 'Admin' }</li>
               </ul>
           </div>
           <div className="card mb-5">
               <h5 className="card-header">Purchase info</h5>
               <ul className="list-group">
                   <li className="list-group-item">history</li>
               </ul>
           </div>

        </Layout>
    )
}

export default Dashboard
