import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated, showNavLinks } from '../utils'
import { Link } from 'react-router-dom';

const Dashboard = () => {

    // console.log(isAuthenticated)
    const {user} = showNavLinks();
    return (
        <>
        <Layout title="Dashboard" description={`Hello ${user.name}`} className="container-fluid"/>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                    <h5 className="card-header">User Links</h5>
                        <ul className="list-group">
                                <li className="list-group-item">
                                    <Link className="nav-link" to ='/cart'>Shopping cart</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link classname="nav-link" to="/profile/update">Update your profile</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
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
                </div>
            </div> 
            </>         
    )
}

export default Dashboard
