import React from 'react';
import { useNavigate } from 'react-router-dom';
import Payment from '../assets/Payment Done.png'

const PaymentConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <img 
        src={Payment} 
        alt="Payment Successful" 
        className="w-1/2 max-w-md mb-8"
      />
      <p className="text-lg font-semibold mb-4">
        Your payment was successful! We will send you a confirmation email soon.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/explore')}
          className="bg-white text-[#FCAF58] px-6 py-3 rounded-lg border border-[#FCAF58] font-semibold"
        >
          Book Another Trip
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-[#FCAF58] text-white px-6 py-3 rounded-lg border border-[#FCAF58]"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
