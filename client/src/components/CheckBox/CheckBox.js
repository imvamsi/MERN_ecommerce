import React from 'react'

const CheckBox = ({categories}) => {

    const[checked, setChecked] = React.useState([]);

    const handleToggle = (item) => e => {
        const currentItems = checked.indexOf(item);
        const newItems = [...checked];
        if(currentItems === -1) {
            newItems.push(item)
        } else {
            newItems.splice(currentItems, 1);
        }
        setChecked(newItems)
    }
    return (
        <>
        {categories && categories.map((item, i) => (
            <li className="list-unstyled" key={i}>
                <input type="checkbox" value={checked.indexOf(item._id === -1)} class="form-check-input" onChange={handleToggle(item._id)}/>
                <label class="form-check-label" for="exampleCheck1">{item.name}</label>
            </li>
        ))}
        </>
    )
}

export default CheckBox
