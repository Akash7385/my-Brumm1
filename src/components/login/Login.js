import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [Message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(true);
    };

    const myFun = () => {
        alert("Please Fill right details")
    };

    return (
        <>
            <section className="hero-section">

                <form>
                    <div className='form'>
                        <h2>
                            <u>Login Here</u>
                        </h2>

                        Enter Email: <input type='text' placeholder='Enter your Email'></input> <br></br>
                        Enter Password:<input type='text' placeholder='Enter your password'></input>

                    </div>
                    <div>
                        <button type='submit' className='buton1' onSubmit={handleSubmit} onClick={myFun}>submit</button>

                    </div >
                    <div className='new-user'>
                        <a href='https://login.wordpress.org/register?locale=en_US' target='_blank'>New User! Click Here</a>
                    </div>

                </form>

            </section>

        </>
    )
}

export default Login