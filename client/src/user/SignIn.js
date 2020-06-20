import React, {useState} from 'react'
import Layout from '../core/Layout'
import { signin } from '../api';
import { isAuthenticated, showNavLinks} from '../utils/index'
import Alert from '../components/Alerts';
import { Link, Redirect } from 'react-router-dom';

const SignIn = (props) => {
    const[value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        error:null,
        success: false
    });

    const[alert, setAlert] = useState(null);
    
    const{user} = showNavLinks();
  
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
        signin({name, email, password})
        .then(data => {
            if (data.err) {
                 setValue({
                    error:data.err
                 })
                 handleAlert(data.err, 'danger');
             } else {
                handleAlert('Successfully Authenticated', 'success');
                isAuthenticated(data);
                // props.history.push('/dashboard');
                if(user && user.role === 1) {
                    return props.history.push('/admin/dashboard')
                } else {
                    return props.history.push('/user/dashboard');
                }
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
            <Layout title='Log in' description='Log in to the app' className='container col-md-8 offset-md-4'/>     
            <div>
                <div className='container col-md-8 offset-md-2' style={{marginTop: '6em'}}>
                    <div id='alert' className='my-3'>
                      {error && <Alert data={error}/>}
                    </div>
                    <form onSubmit={handleSubmit}>
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
                        <small className="form-text text-muted">If you are a new user, please <Link to='signup'>Register</Link></small>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignIn


