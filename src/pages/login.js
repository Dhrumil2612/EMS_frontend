import React from 'react';


export default function Login (){

return(
    <>
    <div className='container d-flex justify-content-center'>
        <div className='col-12 col-md-6 '>
        <h2>Login</h2>
        <form>
            <div className='form-group'>
                <label className='form-label'>Username</label>
                <input className='form-control' type='text' id='username' name='username' />
            </div>
            <div className='form-group'>
                <label className='form-label'>Password</label>
                <input className='form-control' type='password' id='pass' name='password' />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        </div>
        </div>
    </>

)

}
