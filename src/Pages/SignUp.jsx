import image from '../assets/Login_Signup.svg'
import  GoogleLogo  from '../assets/Google Logo.png'
import  FacebookLogo  from '../assets/Facebook Logo.png'
import { MdEmail } from 'react-icons/md'
import { CgPassword } from 'react-icons/cg'
import { Link } from 'react-router-dom'
// import { MdEmail } from 'react-icons/md';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div>
        <div className="flex justify-center items-center mt-20  w-full">
    <div className="lg:w-[80%] w-[90%] flex items-center bg-white rounded-md shadow-md flex-col lg:flex-row">
        <div className="lg:w-[50%] hidden lg:flex">
            <img className="object-cover w-full h-full rounded-md" src={image} alt="" />
        </div>
        {/* <div className='w-[40%] px-20'>
        <div>
            <h1 className='font-bold text-4xl'>Sign Up</h1>
            <h3 className='mt-4 font-semibold'>Sign Up with any account</h3>
            <div className='mt-2 flex gap-4'>
                <div className='flex items-center gap-2 px-8 py-2 border-2 rounded-lg'>
                    <img src={GoogleLogo} alt="googlelogo"  className='w-6 h-6'/>
                    Google
                </div>
                <div className='flex items-center gap-2 px-8 py-2 border-2 rounded-lg'>
                    <img src={FacebookLogo} alt="googlelogo"  className='w-6 h-6'/>
                    Google
                </div>

               
            </div>
            <hr  className=' w-full mt-4 '/>

            <h3 className='mt-4'>Or continue with email address</h3>
            
            <div className='flex flex-col gap-6 mt-2'>
            <div className="relative">
  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input 
    type="text" 
    placeholder="Enter Email" 
    className="bg-gray-200 py-2 pl-10 pr-4 rounded-lg placeholder:text-gray-400 w-full outline-none"
  />
</div>

<div className="relative">
  <CgPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input 
    type="text" 
    placeholder="Enter Password" 
    className="bg-gray-200 py-2 pl-10 pr-4 rounded-lg placeholder:text-gray-400 w-full outline-none"
  />
</div>
<div className='text-center'>

<Link to='/dashboard'className='px-8 py-2 text-center bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 hidden lg:flex cursor-pointer'>Start Travelling</Link>
</div>
</div>
            
        </div>
        </div> */}
       

       <div className='lg:w-1/2   rounded-lg'>
       <div className='lg:px-20 px-10 py-12'>
        <h1 className='font-bold text-4xl text-center'>Create Account</h1>
        <div className='mt-10 flex flex-col gap-6'>
            
        <div className="relative">
  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input 
    type="text" 
    placeholder="Full Name" 
    className="border-b-2 border-gray-500 w-full pl-10 py-2 placeholder:text-gray-500 outline-none"
  />
</div>

<div className="relative">
  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input 
    type="text" 
    placeholder="Email" 
    className="border-b-2 border-gray-500 w-full pl-10 py-2 placeholder:text-gray-500 outline-none"
  />
</div>

<div className="relative">
      <CgPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="border-b-2 border-gray-500 w-full pl-10 pr-10 py-2 placeholder:text-gray-500 outline-none"
      />
      <div 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>

    <div className="relative">
      <CgPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        className="border-b-2 border-gray-500 w-full pl-10 pr-10 py-2 placeholder:text-gray-500 outline-none"
      />
      <div 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>

<div className='flex justify-center'>
<Link to='/otpscreen'className='lg:px-20 px-10 py-2 bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer'>Start Travelling</Link>
</div>


        </div>

        <h3 className='text-center my-4 flex items-center'>
    <span className='flex-1 border-t border-gray-400'></span>
    <span className='mx-4 text-gray-600'>Or Sign up with</span>
    <span className='flex-1 border-t border-gray-400'></span>
</h3>


        <div className='flex justify-center gap-4'>
            <div><img src={GoogleLogo} alt="" className='w-10 h-10 p-2 bg-white rounded-full' /></div>
            <div><img src={FacebookLogo} alt="" className='w-10 h-10 p-2 bg-white rounded-full' /></div>
        </div>

        <h3 className='text-center font-semibold mt-4'>Already have an Account? <span className='text-orange-400 hover:underline duration-300'><Link to='/login'> Login</Link></span>
        </h3>
       </div>

       </div>


    </div>
</div>

        </div>
        
 
  )
}

export default SignUp