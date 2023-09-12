// src/components/LoginForm.js
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const history = useHistory()
  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Add your authentication logic here
    // onLogin({email,password});
    console.log("on submit clicked");
    try{
        //add your api response here to authneticate the user if it is ok redrecidyt to dashboard
       const isAuthenticated = true;
       if(isAuthenticated){
        history.push('/dashboard')
       }
    }
    catch(error){
        console.log("this is error");
    }

  };
;
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmi={handleSubmit}>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
