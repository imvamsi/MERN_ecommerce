import React, {useState} from 'react'
import Layout from '../core/Layout'



const SignUp = () => {
    const[value, setValue] = useState({
        name: '',
        email: '',
        password: ''
    });
  
    const handleChange = event => {
        setValue({...value, 
             [event.target.name]: event.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <>
            <Layout title='Sign Up' description='Sign up to the app' className='container col-md-8 offset-md-4'/>
            <div className='container col-md-8 offset-md-2'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input 
                          type="text" 
                          name='name'
                          className="form-control" 
                          placeholder="Enter your Name" 
                          onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                          type="email" 
                          name='email'
                          className="form-control" 
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter email" 
                           onChange={handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                          type="password" 
                          name='password'
                          className="form-control" 
                          id="exampleInputPassword1" 
                          placeholder="Password" 
                           onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {JSON.stringify(value)}
                </form>
            </div>
        </>
    )
}

export default SignUp


