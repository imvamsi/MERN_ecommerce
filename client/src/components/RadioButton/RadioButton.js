import React from 'react'

const RadioButton = ({prices, handleFilters}) => {
    const[value, setValue] = React.useState(0);

    const handleChange = (e) => {
        handleFilters(e.target.value);
        setValue(e.target.value)
    }

    return (
        <>
        {prices && prices.map((item, i) => (
            <li className="list-unstyled ml-5" key={i}>
                <input type="radio" name={item} value={`${item._id}`} className="form-check-input" onChange={handleChange}/>
                <label class="form-check-label" for="exampleCheck1">{item.name}</label>
            </li>
        ))}
        </>
    )
}

export default RadioButton
