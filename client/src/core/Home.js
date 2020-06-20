import React from 'react'
import Layout from './Layout'
import { getProducts } from '../api';

const Home = () => {

    const[productsBySold, setProductsBySold] = React.useState();
    const[productsByRecentArrival, setProductsByRecentArrival] = React.useState();
    React.useEffect(() => {
        showProductsByMostSold();
    showProdcutsByRecentArrival();
    });

const showProductsByMostSold = sold => {
    getProducts()
    .then(res=> setProductsBySold(res))
    .catch(err=> console.log(err))
}
const showProdcutsByRecentArrival = date => {
    getProducts()
    .then(res => setProductsByRecentArrival(res))
    .catch(err => console.log(err))
}
    return (
        <>
        <Layout title='Home Page' description='Book store'></Layout>
        {JSON.stringify(productsBySold)}
        <hr/>
        {JSON.stringify(productsByRecentArrival)}
        </>
    )
}

export default Home
