import React from 'react';
import Logo from '../../../assets/Go Globe Logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaClipboardList } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import { FaEarthAmericas, FaGear } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";

const DashboardNavbar = () => {
    return (
        <div className='lg:w-[20%] w-[80%] h-screen bg-white flex flex-col justify-between lg:pb-10 pb-20 items-start relative'>
            <div className='flex flex-col'>
                <Link to='/dashboard' className='flex flex-col'>
                    <img src={Logo} alt="Go Globe Logo" className='w-32' />
                    <h1 className='font-bold text-5xl text-[#FCAF58] mt-4 lg:mt-0'>Go Globe</h1>
                    <hr className='h-[2px] my-6 w-[90%] bg-[#FCAF58]' />
                </Link>

                <div className='flex flex-col gap-4 items-start w-full'>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <FaHome className="text-xl" />
                        Home
                    </NavLink>

                    <NavLink
                        to="/booking"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <FaClipboardList className="text-xl" />
                        Booking

                        <div className='w-2 h-2 rounded-full bg-[#FCAF58] absolute right-1'></div>
                        
                    </NavLink>

                    <NavLink
                        to="/explore"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <FaEarthAmericas className="text-xl" />
                        Explore
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <FaUserCog className="text-xl" />
                        Profile
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <FaGear className="text-xl" />
                        Settings
                    </NavLink>

                    <NavLink
                        to="/support"
                        className={({ isActive }) => 
                            `relative flex items-center gap-2 text-lg px-4 py-1 ${isActive ? 'text-[#FCAF58] border-l-[6px] border-[#FCAF58] font-semibold' : 'text-gray-500 font-semibold border-l-[6px] border-white'}`
                        }
                    >
                        <BiSupport className="text-xl" />
                        Support
                    </NavLink>
                </div>
            </div>

            <div className='flex justify-center lg:justify-start w-full'>
                <NavLink
                    to="/Login"
                    className='relative flex items-center gap-2 text-lg px-4 py-1 text-gray-500 hover:text-gray-900 duration-300 font-semibold'
                >
                    <IoLogOut className="text-xl rotate-180" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default DashboardNavbar;
