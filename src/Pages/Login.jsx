import image from '../assets/Login_Signup.svg';
import GoogleLogo from '../assets/Google Logo.png';
import FacebookLogo from '../assets/Facebook Logo.png';
import { MdEmail } from 'react-icons/md';
import { CgPassword } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isDemoLogin, setIsDemoLogin] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleDemoLogin = () => {
        setEmail('demo@example.com');
        setPassword('demopassword');
        setIsDemoLogin(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDemoLogin) {
            toast.success('Logged in as Demo User');
            navigate('/dashboard');
            return;
        }
        if (email && password) {
            toast.success('Logged in successfully');
            navigate('/dashboard');
        } else {
            toast.error('Please enter both email and password');
        }
    };

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="w-[90%] lg:w-[80%] flex items-center bg-white rounded-md shadow-md flex-col lg:flex-row">
                <div className="lg:w-[50%] hidden lg:flex">
                    <img className="object-cover w-full h-full rounded-md" src={image} alt="Login Illustration" />
                </div>

                <div className='w-full lg:w-1/2  rounded-lg'>
                    <div className='px-6 lg:px-20 py-12 lg:py-20'>
                        <h1 className='font-bold text-4xl lg:text-5xl text-center'>Login</h1>

                        <ToastContainer />

                        <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
                            <div className="relative">
                                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border-b-2 border-gray-500 w-full  pl-10 py-2 placeholder:text-gray-500 outline-none"
                                />
                            </div>

                            <div className="relative">
                                <CgPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border-b-2 border-gray-500 w-full  pl-10 pr-10 py-2 placeholder:text-gray-500 outline-none"
                                />
                                <div 
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>

                            <div className='text-center'>
                                <button type="submit" className='px-20 py-2 bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300'>
                                    Login
                                </button>
                            </div>
                        </form>

                        <h3 className='text-center my-4 flex items-center'>
                            <span className='flex-1 border-t border-gray-400'></span>
                            <span className='mx-4 text-gray-600'>Or Login with</span>
                            <span className='flex-1 border-t border-gray-400'></span>
                        </h3>

                        <div className='flex justify-center gap-4'>
                            <div><img src={GoogleLogo} alt="Google Logo" className='w-10 h-10 p-2 bg-white rounded-full cursor-pointer' /></div>
                            <div><img src={FacebookLogo} alt="Facebook Logo" className='w-10 h-10 p-2 bg-white rounded-full cursor-pointer' /></div>
                        </div>

                        <h3 className='text-center font-semibold mt-4'>
                            Don't have an Account? 
                            <span className='text-orange-400 hover:underline duration-300'>
                                <Link to='/signup'> Sign Up</Link>
                            </span>
                        </h3>

                        <div className="text-center mt-8">
                        <button 
                                    onClick={handleDemoLogin}
                                    className='px-6 py-2 bg-gray-200 font-semibold text-lg rounded-lg hover:bg-gray-300'
                                >
                                    Use Demo Credentials
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
