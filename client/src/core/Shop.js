import React from 'react'
import Layout from './Layout'
import {getCategories} from '../api'
import CheckBox from '../components/CheckBox/CheckBox'
import RadioButton from '../components/RadioButton/RadioButton'
import {prices} from '../core/Price'
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
        console.log(newFilters.filters[filterBy])
        if(filterBy === 'price') {
            let cost = handlePriceChange(filters);
            newFilters.filters[filterBy] = cost;
        }
        setMyFilters(newFilters)    
    }

    const handlePriceChange = (value) => {
        let data = prices;
        let arr = [];
        data.forEach(item => {
            if(item._id === parseInt(value)) {
                arr = item.array;
            }
        })
        return arr;
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
                    <h4> Filter by price</h4>
                    <div>
                        <RadioButton prices={prices} handleFilters={(filters) => handleFilters(filters, 'price')}/>
                    </div>   
                </div>
                <div className="col-md-8">
                   {JSON.stringify(myFilters)}
                </div>
            </div>
        </div>
    )
}

export default Shop
