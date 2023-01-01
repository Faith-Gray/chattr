import React from 'react'

function Register() {
  return (
    <div className="formContainer">
        <header>Register</header>
        <form>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='file'/>
            <button>Sign Up!</button>
        </form>
        <p>Already have an account? Login</p>
    </div>
  )
}

export default Register;