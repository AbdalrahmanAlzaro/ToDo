import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem('Email').replace(/"/g, '');
    let pass = localStorage.getItem('Password').replace(/"/g, '');

    if (!emailLog || !passwordLog) {
      setFlag(true);
      console.log('Empty');
    } else if (passwordLog !== pass || emailLog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
    navigate("/");
  }

  return (
    <div>
      {/* {home ? ( */}
      <form onSubmit={handleLogin}>
        <h3> Log in</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmailLog(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordLog(event.target.value)}
          />
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
      {/* ) : (
        <Home />
      )} */}
    </div>
  );
}

export default Login;
































// import React, { useState, useContext } from 'react';
// import { UserContext } from '../UserContext';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);
//   const [emailLog, setEmailLog] = useState('');
//   const [passwordLog, setPasswordLog] = useState('');
//   const [flag, setFlag] = useState(false);

//   function handleLogin(e) {
//     e.preventDefault();
//     let mail = localStorage.getItem('Email').replace(/"/g, '');
//     let pass = localStorage.getItem('Password').replace(/"/g, '');

//     if (!emailLog || !passwordLog) {
//       setFlag(true);
//       console.log('Empty');
//     } else if (passwordLog !== pass || emailLog !== mail) {
//       setFlag(true);
//     } else {
//       setUser({ isLoggedIn: true, firstName: 'FirstName' });
//       setFlag(false);
//       navigate('/');
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <h3> Log in</h3>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(event) => setEmailLog(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(event) => setPasswordLog(event.target.value)}
//           />
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
