
import React, { useState } from 'react';
import Login from './Login';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Please enter your name.';
    }

    if (!email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      errors.password = 'Please enter your password.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setFlag(true);
    } else {
      setErrors({});
      setFlag(false);
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('Password', JSON.stringify(password));
      localStorage.setItem('Name', JSON.stringify(name));
      console.log('Saved in local storage');
      setLogin(!login);
    }
  }

  function handleClick(e) {
    setLogin(!login);
  }

  return (
    <div className='cc'>
      <div className="outer">
        <div className="inner">
          {login ? (
            <form onSubmit={handleSubmit}>
              <h3>Sign in</h3>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block btt">
                Sign in
              </button>
              <p className="forget-password" onClick={handleClick}>
                Already have an account? Log in
              </p>
              {flag && (
                <div className="alert alert-primary" role="alert">
                  Please fill every field.
                </div>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;




