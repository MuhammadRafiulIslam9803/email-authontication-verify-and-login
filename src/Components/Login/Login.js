import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Fairbase/Firebase.init';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';


const auth =getAuth(app)

const Login = () => {
    const [user ,setUser] = useState('')
    const [invalidUser ,setInvalidUser] = useState(false)
    const [login ,setLogin] = useState(false)

    const handleLOginButton =(event) =>{
        event.preventDefault()
         const form = event.target;
         const email =form.email.value;
         const password = form.password.value;

         signInWithEmailAndPassword(auth ,email ,password).then(result =>{
            const user = result.user;
            setUser(user)
            setLogin(true)
            console.log(user)
         })
         .catch(error =>{
            setInvalidUser(true)
         })
    }
    return (
        <div className='registerConteiner'>
            <h1>Please Login Here !!</h1>
            <form onSubmit={handleLOginButton}  className='formConteiner'>
                 <input type="email" name="email" id="1" placeholder='Your Email ...@gmail.com' required/>
                 <input type="password" name="password" id="3" placeholder='Your Password' required/>
                 <button className='btn-style'>Login</button>
            </form>
            <div>
                {invalidUser && <p>Please Regitration first <Link to='/registration'>Registration</Link></p>}
                {/* {login && <p>Login Successfully Go to <Link to='/home'>Home</Link></p>} */}
                {login && <div>
                    <h3>Email : {user.email}</h3> 
                    <h3>Unique id : {user.uid}</h3> 
                    <h3>Creation Time : {user.metadata.creationTime}</h3> 
                </div> }
                
            </div>
        </div>
    );
};

export default Login;