import React, { useState } from 'react';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import app from '../../Fairbase/Firebase.init';

const auth = getAuth(app)
const Reset = () => {

    const [send ,setSend] = useState(false)

    const handleResetPass =(event) =>{
        const email = event.target.value;
        setSend(false)
        // reset password
        sendPasswordResetEmail(auth , email).then(()=>{
            // password alredy send
            setSend(true)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className='registerConteiner'>
            <div className='formConteiner'>
                <input onBlur={handleResetPass} type="email" name="email" id="" placeholder='Your Email '/>
                <button className='btn-style'>Reset Password</button>
           </div>
           <div>
            {send && <p>Email Send Successfully</p>}
           </div>
        </div>
    );
};

export default Reset;