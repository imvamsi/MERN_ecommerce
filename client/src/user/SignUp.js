import React, {useState} from 'react'
import Layout from '../core/Layout'
import { signup } from '../api';
import Alert from '../components/Alerts';

const SignUp = () => {
    const[value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        error:null,
        success: false
    });
  
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
                 //setValue({ ...value, error: data.err, success: false });
                 setAlert(data.err, 'danger');
            } else {
                setValue({
                    ...value,
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                });
            }
        })
    }
    const setAlert = (msg, type) => {
        console.log(msg, type);
        setValue({ error: { msg: msg, type: type } });
        setTimeout(() => setValue({ error: null }), 1000);
      };
    // const handleAlert = ({msg, type}) => {
    //     setAlert({data: {msg: msg, type: type}});
    //     setTimeout(() => setAlert({data: null}), 1000);
    // }
    return (
        <>
            <Layout title='Sign Up' description='Sign up to the app' className='container col-md-8 offset-md-4'/>
           <Alert data={error}/> 
            <div className='container col-md-8 offset-md-2'>
                <form onSubmit={handleSubmit} setAlert={setAlert}>
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
                </form>
            </div>
        </>
    )
}

export default SignUp


