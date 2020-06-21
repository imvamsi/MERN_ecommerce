import React from 'react'
import Layout from './Layout'

const Shop = () => {
    return (
        <div>
            <Layout title="Shopping page" description="search and select books of your choice"/>
            <div className="row">
                <div className="col-4">
                    Left sidebar
                </div>
                <div className="col-8">
                    RIght
                </div>
            </div>
        </div>
    )
}

export default Shop
