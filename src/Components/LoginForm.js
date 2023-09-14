
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSs/LoginPage.css';
import { useAuth } from '../services/AuthProvider';

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    // Simulate a login request to your backend
    // In this example, we check the username and password
    if (formData.username === 'admin@gmail.com' && formData.password === 'admin123') {
      const userData = {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
      };
      login(userData);

      localStorage.setItem('login',JSON.stringify(userData));

      // Redirect to the home page after successful login
      navigate('/Home');
    } else {
      // Handle incorrect credentials (e.g., show an error message)
      alert('Incorrect username or password');
    }
  };

  return (
    <div id="login-container" className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-header" id="login-header">
            Login
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email-input" id="email-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  id="email-input"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password-input" id="password-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  id="password-input"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" id="login-button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
