import React from 'react';
import style from "../logIn/login.module.css"
import { Link } from 'react-router-dom';
function form(){
 return(
    <div className={style.register}>
      <div className={style.col-1}>
         <h3>Login In</h3>
         <form id='form' className= {style.signForm}>
            <input type= "text" placeholder='Username' required />
            <input type="password" placeholder='Password'required />
            <div>
            <button type="button" class="btn btn-primary">Login</button>
            </div>
            

            <Link to = "Forget Password"><p>Forgot Password</p></Link>
            <Link to = "/Signin"><p>Sign In</p></Link>
         </form>
      </div>
      <div className='col-2'></div>
    </div>
 )
}

export default form;
