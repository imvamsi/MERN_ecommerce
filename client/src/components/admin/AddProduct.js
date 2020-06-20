import React from 'react'
import Layout from '../../core/Layout'
import { showNavLinks } from '../../utils'
import { createProduct, getCategories} from '../../api';


const AddProduct = () => {

    const[values, setValues] = React.useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        shipping: '',
        photo: '',
        categories: [],
        loading: '',
        error:'',
        createdProduct: '',
        redirectToProfile: '',
        formData: ''
    });

    React.useEffect(() => {
        // setValues({...values, formData: new FormData()})
        getCategories()
        .then(data => setValues({...values, categories: data, formData: new FormData()}))
        .catch(err => console.log(err))
    }, []);
    const{name, 
        description, 
        price, 
        category, 
        categories, 
        quantity, 
        shipping, 
        photo, 
        loading, 
        error, 
       createdProduct, 
       redirectToProfile, formData} = values;
    
    const{user, token} = showNavLinks();

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value);
        setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        createProduct(user._id, token, formData)
        .then(data => setValues({...values, name: '', price: '', description: '',quantity:'', shipping: '', category: ''}))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Layout title="Add new product" description="add a new product to the site"/>
           <div className="row">
               <div className="col-md-8 offset-md-2">
                    <form className="mb-3" onSubmit={handleSubmit}>
                        <h4>Post Photo</h4>
                        <div className="form-group">
                            <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Name</label>
                            <input type="text" value={name} className="form-control" onChange={handleChange('name')}/>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Description</label>
                            <textarea value={description} className="form-control" onChange={handleChange('description')}/>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">price</label>
                            <input type="number" value={price} className="form-control" onChange={handleChange('price')}/>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Category</label>
                            <select value={category} className="form-control" onChange={handleChange('category')}>
                                <option value="">select category</option>
                                {/* <option value="5ed9617c48dc014b71a5be4e">PHP</option>
                                <option value="5ed9617c48dc014b71a5be4e">Node</option> */}
                                {categories && categories.map((item, id) => (
                                    <option key={item._id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Shipping</label>
                            <select value={shipping} className="form-control" onChange={handleChange('shipping')}>
                                <option value="">Selecting shipping prefernce</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="text-muted">Quantity</label>
                            <input type="number" value={quantity} className="form-control" onChange={handleChange('quantity')}/>
                        </div>
                        <button className="btn btn-outline-primary">Create product</button>
                    </form>
               </div>
           </div>
           
        </div>
    )
}

export default AddProduct
