import React from 'react'

const CheckBox = ({categories, handleFilters}) => {

    const[checked, setChecked] = React.useState([]);

    const handleToggle = (item) => e => {
        const currentItems = checked.indexOf(item);
        const newItems = [...checked];
        if(currentItems === -1) {
            newItems.push(item)
        } else {
            newItems.splice(currentItems, 1);
        }
        console.log(newItems)
        setChecked(newItems)
        handleFilters(newItems)
    }
    return (
        <>
        {categories && categories.map((item, i) => (
            <li className="list-unstyled" key={i}>
                <input type="checkbox" className="form-check-input" onChange={handleToggle(item._id)}/>
                <label class="form-check-label" for="exampleCheck1">{item.name}</label>
            </li>
        ))}
        </>
    )
}

export default CheckBox
