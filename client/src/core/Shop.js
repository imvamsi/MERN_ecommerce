import React from 'react'
import Layout from './Layout'
import {getCategories} from '../api'
import CheckBox from '../components/CheckBox/CheckBox'
const Shop = () => {

    const[categories, setCategories] = React.useState([]);
    const[myFilters, setMyFilters] = React.useState({
        filters: {
            category: [], 
            price: []
        }  
    }) 

    React.useEffect(() => {
        getCategories()
        .then(res => setCategories(res))
        .catch(err => console.log(err))
    }, []);

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters};
        newFilters.filters[filterBy] = filters;
        setMyFilters(newFilters)
    }
    return (
        <div>
            <Layout title="Shopping page" description="search and select books of your choice"/>
            <div className="row">
                <div className="col-md-3 px-5">
                    <h4> Filter by categories</h4>
                    <ul>
                        <CheckBox categories={categories} handleFilters={(filters) => handleFilters(filters, 'category')}/>
                    </ul>   
                </div>
                <div className="col-md-8">
                   {JSON.stringify(myFilters)}
                </div>
            </div>
        </div>
    )
}

export default Shop
