import React from 'react';
import style from "../signIn/signIn.module.css";
import { Link } from 'react-router-dom';
function form(){
 return(
    <div className={style.register}>
      <div className={style.col-1}>
         <h3>Sign In</h3>
         <span>Register and enjoy the service</span>

         <form id='form' className= {style.signForm}>
            <input type= "text" placeholder='Username' required />
            <input type="password" placeholder='Password'required />
            <input type="password" placeholder='Confirm Password' required/>
            <input type="text" placeholder='Mobile Number' required/>
            <div>
            <button type="button" class="btn btn-primary">Sign in</button>
            </div>

            

          <Link to="/Login"><p className={style.p}>Login In</p></Link>
         </form>
      </div>
      <div className='col-2'></div>
    </div>
 )
}

export default form;