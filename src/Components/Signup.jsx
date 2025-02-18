import React,{useState} from 'react'
import { auth, db } from "../../Database/fb";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import GoogleAuthButton from './GoogleAuthButton';

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            await db.collection("users").doc(user.user.uid).set({
                fullName,
                email,
                password,
            });
            
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[url('./../public/introBack.webp')] md:bg-center bg-no-repeat p-4">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.6,}} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white text-center mb-4 transition duration-300 ease-in-out hover:scale-105">SIGN UP</h2>

                {error && <p className="text-red-400 text-center">{error}</p>}

                <form onSubmit={handleSignup} className="space-y-4" autoComplete='off'>
                    <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-400" required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 outline-none focus:ring-purple-400" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-400" required />                  
                    <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-900 hover:cursor-pointer">
                        Sign Up 
                    </button>
                    <GoogleAuthButton />
                </form>

                <p className="text-gray-400 text-center mt-4">
                Already have an account? <Link to="/login" className="text-purple-300 hover:underline hover:underline-offset-3">Login here</Link>
                </p>
            </motion.div>
        </div>
    )
}

export default Signup
