import React from 'react'
import Layout from '../../core/Layout'
import {showNavLinks} from '../../utils'
import {createCategory} from '../../api'
import {Link} from 'react-router-dom'

const AddCategory = () => {

    const[name, setName] = React.useState('');
    const[error, seterror] = React.useState(false);
    const[success, setSuccess] = React.useState(false);

    //destructure token
    const{user, token} = showNavLinks();

    const handleChange = e => {
        seterror('')
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        createCategory(user._id, token, {name})
        .then(data => {
           console.log(data);
        })

    }
    return (
        <div>
             <Layout title="Add new category" description="create a new catgory"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="text-muted">Name</label>
                                <input type="text" className="form-control" onChange={handleChange} value={name}/>
                                <button className="btn btn-outline-primary my-5">Create Category</button>
                            </div>
                        </form>
                        <Link to = '/admin/dashboard'>Back to Admin Dashboard</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AddCategory
