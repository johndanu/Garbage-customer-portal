import React from 'react'

function Login() {
  return (
    <div className='row login_page '>
      <div className='col-md-5 text-center log_left h-100 d-flex align-items-center justify-content-center '>
        <div>
        <h3 className='mb-4 light_text'>Welcome To Trash-Pot</h3>
        <img width="90%" height="auto" src="/mainIcons/login-logo.png" alt='log0'/>
        </div>  
      </div>
      <div className='col-md-7 log_rgt h-100 d-flex align-items-center justify-content-center'>
        <div className='text-center login_card secondary_text '>
          <h6 className='secondary_text mb-4'>Sign In</h6>
          <input type="text" className='log_input form-control my-5 ' placeholder='Username'  />
          <input type="password" className='log_input form-control my-5' placeholder='Password'  />
          <button className='btn my-5'>Sign-In</button>

        </div>
      </div>
    </div>
  )
}

export default Login