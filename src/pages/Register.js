import React, { useState } from 'react'
import Login from './Login'


function Register() {


    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setpassword] = useState('');

    const [flag, setFlag] = useState(false);

    const [login, setLogin] = useState(true);


    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email))
            localStorage.setItem("Password", JSON.stringify(password))

            console.log('save in local storage ')
            setLogin(!login)
        }
    }

    function handleClick(e) {
        setLogin(!login)
    }




    return (


        <div>
            <div className='outer'>
                <div className='inner'>

                    {login ? (

                        <form onSubmit={handleSubmit}>
                            <h3>Sign in </h3>
                            <div className='form-gruop'>
                                <label>Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter full name '
                                    onChange={(event) => setName(event.target.value)}
                                />

                            </div>
                            <div className='form-gruop'>
                                <label>Email</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter email'
                                    onChange={(event) => setEmail(event.target.value)}
                                />

                            </div>
                            <div className='form-gruop'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter password'
                                    onChange={(event) => setpassword(event.target.value)}
                                />

                            </div>
                            <button type='submit' className='btn btn-dark btn-lg btn-block btt'>Sign in</button>
                            <p className='forget-password' onClick={handleClick}>Already have account {''} Log in</p>



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
    )
}

export default Register