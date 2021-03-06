 import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "../components/Card/Card";
import { getCategories, getFilteredProducts } from "../api";
import Checkbox from "../components/CheckBox/CheckBox";
import RadioBox from "../components/RadioButton/RadioButton";
import { prices } from "./Price";

const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(9);
    const [skip, setSkip] = useState(0);
    const[size, setSize] = useState(0)
    const [filteredResults, setFilteredResults] = useState([]);

    const init = () => {
        getCategories()
        .then(data => setCategories(data))
        .catch(err => console.log(err));
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters);
        getFilteredProducts(skip, limit, newFilters)
        .then(data => setFilteredResults(data.data))
        .catch(err => console.log(err))
    };

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

        if (filterBy === "price") {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }
        loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };

    const handlePrice = value => {
        const data = prices;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value)) {
                array = data[key].array;
            }
        }
        return array;
    };


    return (
        <>
        <Layout
            title="Shop Page"
            description="Search and find books of your choice"
            className="container-fluid"
        />
           <div className="container-fluid">
           <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox
                            categories={categories}
                            handleFilters={filters =>
                                handleFilters(filters, "category")
                            }
                        />
                    </ul>

                    <h4>Filter by price range</h4>
                    <div>
                        <RadioBox
                            prices={prices}
                            handleFilters={filters =>
                                handleFilters(filters, "price")
                            }
                        />
                    </div>
                </div>

                <div className="col-8">
                    <h2 className="mb-4">Products</h2>
                    <div className="row">
                        {filteredResults.map((product, i) => (
                            <Card key={i} product={product} />
                        ))}
                    </div>
                </div>
            </div>
           </div>
        </>
    );
};

export default Shop;
