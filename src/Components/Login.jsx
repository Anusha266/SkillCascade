import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from '../../Database/fb'
import {motion} from 'framer-motion'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        }
    };
    return (
        
        <div className="flex min-h-screen items-center justify-center bg-[url('./../public/introBack.webp')] md:bg-center bg-no-repeat p-4">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.6,}} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white text-center mb-4 transition duration-300 ease-in-out hover:scale-105">LOGIN </h2>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <input
                        type="email"
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-400 text-center">{error}</p>}
                    <button className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-900 hover:cursor-pointer">
                        Login
                    </button>
                    </form>

                    <p className="text-gray-400 text-center mt-4">
                    Don't have an account?{" "}
                <Link to="/signup" className="text-purple-300 hover:underline hover:underline-offset-3 whitespace-nowrap">
                    Create an account
                </Link>
                </p>
            </motion.div>
        </div>
    )
}

export default Login
