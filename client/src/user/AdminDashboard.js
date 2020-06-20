import React from 'react'
import Layout from '../core/Layout'
import { isAuthenticated, showNavLinks } from '../utils'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    // console.log(isAuthenticated)
    const {user} = showNavLinks();
    return (
        <>
        <Layout title="Dashboard" description={`Hello ${user.name}`} className="container-fluid"/>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                    <h5 className="card-header">Admin Links</h5>
                        <ul className="list-group">
                                <li className="list-group-item">
                                    <Link className="nav-link" to ='/create/category'>Create category</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link classname="nav-link" to="/create/product">create product</Link>
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
                </div>
            </div> 
            </>         
    )
}

export default AdminDashboard
