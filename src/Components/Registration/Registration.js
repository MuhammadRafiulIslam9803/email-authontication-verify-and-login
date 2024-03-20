import React, { useState } from 'react';
import './Registration.css'
import {  createUserWithEmailAndPassword, getAuth,  sendEmailVerification } from "firebase/auth";
import app from '../../Fairbase/Firebase.init';


const auth =getAuth(app)

const Registration = () => {

    const [passwordError ,setPassWordError] =useState('')
    const [success ,setSuccess] =useState(false)

    const handleRegisterButton =(event) =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = event.target.password.value
        
        setSuccess(false)
        // strong password check
        if(!/(?=.*[A-Z])/.test(password)){
            setPassWordError("Provide at least one UpperCase letter one Special character minimum 6 letter")
            // form.reset()
            return;

        }
        if(!/(?=.*[!@#$&*])/.test(password)){
            setPassWordError("Provide at least one Special character")
            return;
        }
        if(!/.{6}/.test(password)){
            setPassWordError("Provide minimum 6 letter")
            return;
        }
        // if sob compleate kore tahole 
        setPassWordError('')
        
        // email verification

        const emailVerification =()=>{
            sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                alert('email already send check and verify that ,also check in spam-box')
               
              });
        }

        
         //create email and password 
        console.log(email ,password)
        createUserWithEmailAndPassword(auth ,email ,password)
        .then(result =>{
            const user =result.user
            console.log(user)
            emailVerification()
            form.reset()
            setSuccess(true)
        })
        .catch((error)=>{
            setPassWordError(error.message)
            form.reset()
        })
    }
    return (
        <div className='registerConteiner'>
            <h1>Please Complete Registration Here !!</h1>
            <form onSubmit={handleRegisterButton}  className='formConteiner'>
                 <input type="email" name="email" id="1" placeholder='Your Email ...@gmail.com' required/>
                 <input type="password" name="password" id="3" placeholder='Your Password' required/>
                 <button className='btn-style'>Registretion</button>
            </form>
            <div>
                {success && <p>Verify your Email and Complete the Regitration</p>}
                {passwordError && <p>{passwordError}</p>}
            </div>
        </div>
    );
};

export default Registration;