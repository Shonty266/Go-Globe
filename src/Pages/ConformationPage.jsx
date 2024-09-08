import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const formData = state || {};

  // Function to handle payment
  const handlePayment = () => {
    // Redirect to payment page or process payment
    navigate('/explore/placedetails/bookingform/conformation/paymentconformation', { state: { ...formData, totalPrice: formData.price } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Confirmation</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
        <p><strong>Passport Number:</strong> {formData.passportNumber}</p>
        <p><strong>Passport Validity:</strong> {formData.passportValidity}</p>
        <p><strong>Nationality:</strong> {formData.nationality}</p>
        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
        <p><strong>Email Address:</strong> {formData.emailAddress}</p>
        <p><strong>Emergency Contact Name:</strong> {formData.emergencyContactName}</p>
        <p><strong>Emergency Contact Phone:</strong> {formData.emergencyContactPhone}</p>
        <p><strong>Emergency Contact Relationship:</strong> {formData.emergencyContactRelation}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Travel Details</h2>
        <p><strong>Destination:</strong> {formData.destination}</p>
        <p><strong>Travel Dates:</strong> {formData.travelDates}</p>
        <p><strong>Duration:</strong> {formData.duration}</p>
        <p><strong>Number of Travelers:</strong> {formData.numberOfTravelers}</p>
        <p><strong>Flight Preferences:</strong> {formData.flightPreferences}</p>
        <p><strong>Accommodation Preferences:</strong> {formData.accommodationPreferences}</p>
        <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
      </div>

      {formData.numberOfTravelers > 1 && (
        <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-semibold mb-2">Additional Travelers</h2>
          {formData.additionalTravelers.map((traveler, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Traveler {index + 1}</h3>
              <p><strong>Full Name:</strong> {traveler.fullName}</p>
              <p><strong>Date of Birth:</strong> {traveler.dateOfBirth}</p>
              <p><strong>Passport Number:</strong> {traveler.passportNumber}</p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
        <p><strong>Billing Address:</strong> {formData.billingAddress}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow mt-4">
        <h2 className="text-xl font-semibold mb-2">Additional Documents</h2>
        <p><strong>Visas:</strong> {formData.visas}</p>
        <p><strong>Travel Insurance:</strong> {formData.travelInsurance}</p>
        <p><strong>Health Records:</strong> {formData.healthRecords}</p>
        <p><strong>Vaccination Records:</strong> {formData.vaccinationRecords}</p>
      </div>

      {/* Price and Pay Button */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mt-6 flex items-end flex-col">
        {/* <h2 className="text-xl font-semibold mb-2">Price</h2> */}
        <p className='text-2xl font-bold'>₹ {formData.packagePrice}</p>
        <div>
        <button
          onClick={handlePayment}
          className="bg-[#FCAF58] text-xl text-white px-6 py-2 rounded mt-4 font-semibold"
        >
          Pay Now
        </button>
        </div>
      </div>

      {/* <div className="mt-6">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div> */}
    </div>
  );
};

export default ConfirmationPage;
