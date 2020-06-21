import React from 'react'
import Layout from './Layout'
import { getProducts } from '../api';
import Card from '../components/Card/Card';

const Home = () => {

    const[productsBySold, setProductsBySold] = React.useState([]);
    const[productsByRecentArrival, setProductsByRecentArrival] = React.useState([]);
    React.useEffect(() => {
        showProductsByMostSold();
    showProdcutsByRecentArrival();
    }, []);

        const showProductsByMostSold = () => {
            getProducts('sold')
            .then(res=> setProductsBySold(res))
            .catch(err=> console.log(err))
        }
        const showProdcutsByRecentArrival = () => {
            getProducts('date')
            .then(res => setProductsByRecentArrival(res))
            .catch(err => console.log(err))
        }
    return (
        <>
        <Layout title='Home Page' description='Book store'></Layout>
        <div className="container">
        <h5 className="mb-3">Best Sellers</h5>
        <div className="row">
           
            {productsBySold && productsBySold.map((item) => (
                <Card key={item._id} product={item}/>
            ))}
        </div>
        <h5 className="mb-3">New Arrivals</h5>
        <div className="row">
            
            {productsByRecentArrival && productsByRecentArrival.map((item) => (
                <Card key={item._id} product={item}/>
            ))}
        </div>
        </div>
        </>
    )
}

export default Home
