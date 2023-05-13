// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const [emailLog, setEmailLog] = useState('');
//   const [passwordLog, setPasswordLog] = useState('');
//   const [flag, setFlag] = useState(false);

//   function validateForm() {
//     const errors = {};

//     if (!emailLog.trim()) {
//       errors.email = 'Please enter your email.';
//     } else if (!/\S+@\S+\.\S+/.test(emailLog)) {
//       errors.email = 'Please enter a valid email address.';
//     }

//     if (!passwordLog) {
//       errors.password = 'Please enter your password.';
//     }

//     return errors;
//   }

//   function handleLogin(e) {
//     e.preventDefault();
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length > 0) {
//       setFlag(true);
//     } else {
//       setFlag(false);

//       let mail = localStorage.getItem('Email')?.replace(/"/g, '');
//       let pass = localStorage.getItem('Password')?.replace(/"/g, '');

//       if (emailLog === mail && passwordLog === pass) {
//         navigate('/');
//       } else {
//         setFlag(true);
//       }
//     }
//   }

//   const formErrors = validateForm();

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <h3>Log in</h3>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter email"
//             value={emailLog}
//             onChange={(event) => setEmailLog(event.target.value)}
//           />
//           {flag && <div className="error">{formErrors.email}</div>}
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             value={passwordLog}
//             onChange={(event) => setPasswordLog(event.target.value)}
//           />
//           {flag && <div className="error">{formErrors.password}</div>}
//         </div>
//         <button type="submit" className="btn btn-dark btn-lg btn-block btt">
//           Log in
//         </button>

//         {flag && (
//           <div className="alert alert-primary" role="alert">
//             Please enter correct information.
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [flag, setFlag] = useState(false);
  const [firstName, setFirstName] = useState('');

  function validateForm() {
    const errors = {};

    if (!emailLog.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(emailLog)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!passwordLog) {
      errors.password = 'Please enter your password.';
    }

    return errors;
  }

  function handleLogin(e) {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setFlag(true);
    } else {
      setFlag(false);

      let mail = localStorage.getItem('Email')?.replace(/"/g, '');
      let pass = localStorage.getItem('Password')?.replace(/"/g, '');

      if (emailLog === mail && passwordLog === pass) {
        // Fetch the user's first name from registration and set it in state
        const storedName = localStorage.getItem('Name')?.replace(/"/g, '');
        setFirstName(storedName);
        navigate('/');
      } else {
        setFlag(true);
      }
    }
  }

  const formErrors = validateForm();

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Log in</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={emailLog}
            onChange={(event) => setEmailLog(event.target.value)}
          />
          {flag && <div className="error">{formErrors.email}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={passwordLog}
            onChange={(event) => setPasswordLog(event.target.value)}
          />
          {flag && <div className="error">{formErrors.password}</div>}
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block btt">
          Log in
        </button>

        {flag && (
          <div className="alert alert-primary" role="alert">
            Please enter correct information.
          </div>
        )}
      </form>

      {firstName && (
        <div className="welcome-message">
          Welcome {firstName}
        </div>
      )}
    </div>
  );
}

export default Login;
