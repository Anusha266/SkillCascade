import React from 'react'
import {auth,provider} from '../../Database/fb'
import {useNavigate} from 'react-router-dom'
import {AiFillGoogleCircle} from 'react-icons/ai'
import { useUser } from "../App";

const GoogleAuthButton = () => {
    const navigate = useNavigate();
    const {setPresentUser} = useUser();
    const handleGoogleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            setPresentUser(user);
            console.log(user);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className='flex flex-col items-center gap-2'>
            
            <button onClick={handleGoogleAuth} className="flex items-center gap-2 bg-black hover:border hover:border-purple-500 hover:text-purple-200 text-white py-2 px-2 rounded hover:cursor-pointer ">
            <AiFillGoogleCircle className='text-2xl'/>
            </button>
        </div>
    )
}

export default GoogleAuthButton
