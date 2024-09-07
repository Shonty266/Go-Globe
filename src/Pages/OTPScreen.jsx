import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePassword } from 'react-icons/md';

const OtpScreen = () => {
    const [timeLeft, setTimeLeft] = useState(300);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        const messageTimer = setTimeout(() => {
            setShowMessage(true);
        }, 5000);

        const redirectTimer = setTimeout(() => {
            window.location.href = '/dashboard';
        }, 8000);

        return () => {
            clearInterval(timer);
            clearTimeout(messageTimer);
            clearTimeout(redirectTimer);
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsLeft = seconds % 60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="bg-white p-8 rounded-lg shadow-md lg:w-[40%] w-[90%]">
                <h1 className="text-4xl font-bold text-center text-[#FCAF58]">Go Globe</h1>
                <h2 className="text-md text-center text-gray-600 mt-4">
                    An email verification code has been sent to your inbox. Please enter the code to proceed.
                </h2>

                <div className="mt-8 flex flex-col gap-4 items-center">
                    <div className="relative w-full">
                        <MdOutlinePassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className="border-b-2 border-gray-500 w-full py-2 pl-10 pr-4 placeholder:text-gray-500 outline-none"
                        />
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        Your OTP will expire in {formatTime(timeLeft)}.
                    </p>
                </div>

                <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm">
                        By proceeding with the verification, you agree to our{' '}
                        <a href="/terms" className="text-[#FCAF58] hover:underline">
                            Terms of Service
                        </a> and{' '}
                        <a href="/privacy" className="text-[#FCAF58] hover:underline">
                            Privacy Policy
                        </a>.
                    </p>
                </div>

                {showMessage && (
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-lg">
                            Redirecting to dashboard in 3 seconds...
                        </p>
                    </div>
                )}

                <div className='flex justify-center mt-6'>
                    <Link
                        to='/dashboard'
                        className='lg:px-20 px-10 py-2 bg-[#F9C784] font-semibold text-xl rounded-lg hover:bg-[#FCAF58] hover:text-white duration-300 lg:flex cursor-pointer'>
                        Continue to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OtpScreen;
