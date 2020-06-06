import React, {useState} from 'react'
import Layout from '../core/Layout'
import { signup } from '../api';
import Alert from '../components/Alerts';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const[value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        error:null,
        success: false
    });

    const[alert, setAlert] = useState(null);
  
    const {name, email, password, error, success} = value;
    const handleChange = event => {
        setValue({...value, 
             [event.target.name]: event.target.value,
             error: false
        });
        
    }

    

    const handleSubmit = e => {
        e.preventDefault();
        setValue({...value, error: false});
        signup({name, email, password})
        .then(data => {
            if (data.err) {
                 setValue({
                    error:data.err
                 })
                 handleAlert(data.err, 'danger');
             } else {
                handleAlert('You have been successfully registered, Please signin', 'success');
            }
        })
    }
    
    const handleAlert = (msg, type) => {
        console.log(msg, type);
            setValue({ error: { msg: msg, type: type } });
            setTimeout(() => setValue({...value, error: null }), 4000);   
      };
    return (
        <>
            <Layout title='Sign Up' description='Sign up to the app' className='container col-md-8 offset-md-4'/>     
            <div>
                <div className='container col-md-8 offset-md-2' style={{marginTop: '6em'}}>
                    <div id='alert' className='my-3'>
                      {error && <Alert data={error}/>}
                    </div>
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
                        <small className="form-text text-muted">If you have an account, please <Link to='signin'>Sign in</Link></small>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp


