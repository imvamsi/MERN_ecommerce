import React from 'react'
import Layout from './Layout'
import {getCategories} from '../api'
import CheckBox from '../components/CheckBox/CheckBox'
const Shop = () => {

    const[categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        getCategories()
        .then(res => setCategories(res))
        .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Layout title="Shopping page" description="search and select books of your choice"/>
            <div className="row">
                <div className="col-md-3 px-5">
                    <h4> Filter by categories</h4>
                    <ul>
                        <CheckBox categories={categories}/>
                    </ul>   
                </div>
                <div className="col-md-8">
                    RIght
                </div>
            </div>
        </div>
    )
}

export default Shop
