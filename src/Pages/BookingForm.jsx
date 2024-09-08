import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    passportNumber: '',
    passportValidity: '',
    nationality: '',
    phoneNumber: '',
    emailAddress: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    destination: state?.country || '',
    travelDates: '',
    duration: state?.duration || '',
    numberOfTravelers: 1,
    flightPreferences: '',
    accommodationPreferences: state?.hotel || '',
    specialRequests: '',
    paymentMethod: '',
    billingAddress: '',
    visas: '',
    travelInsurance: '',
    healthRecords: '',
    vaccinationRecords: '',
    additionalTravelers: [{ fullName: '', dateOfBirth: '', passportNumber: '' }],
    packageName: state?.name || '',
    packagePrice: state?.price || '',
    activities: state?.activities || [],
    amenities: state?.amenities || []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAdditionalTravelerChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTravelers = [...formData.additionalTravelers];
    updatedTravelers[index][name] = value;
    setFormData(prevState => ({ ...prevState, additionalTravelers: updatedTravelers }));
  };

  const addAdditionalTraveler = () => {
    setFormData(prevState => ({
      ...prevState,
      additionalTravelers: [...prevState.additionalTravelers, { fullName: '', dateOfBirth: '', passportNumber: '' }]
    }));
  };

  const removeAdditionalTraveler = (index) => {
    const updatedTravelers = formData.additionalTravelers.filter((_, i) => i !== index);
    setFormData(prevState => ({ ...prevState, additionalTravelers: updatedTravelers }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Navigate to confirmation page with formData
    navigate('/explore/placedetails/bookingform/conformation', { state: formData });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <label className="block mb-2">
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Passport Number:
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Passport Validity:
            <input
              type="date"
              name="passportValidity"
              value={formData.passportValidity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Nationality:
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Email Address:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Emergency Contact Name:
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Emergency Contact Phone:
            <input
              type="tel"
              name="emergencyContactPhone"
              value={formData.emergencyContactPhone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Emergency Contact Relationship:
            <input
              type="text"
              name="emergencyContactRelation"
              value={formData.emergencyContactRelation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
        </div>

        {/* Travel Details */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Travel Details</h2>
          <label className="block mb-2">
            Destination:
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Travel Dates:
            <input
              type="date"
              name="travelDates"
              value={formData.travelDates}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Duration:
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-2">
            Number of Travelers:
            <input
              type="number"
              name="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={(e) => handleChange({ target: { name: e.target.name, value: parseInt(e.target.value, 10) } })}
              className="w-full p-2 border border-gray-300 rounded"
              min="1"
              required
            />
          </label>
          <label className="block mb-2">
            Flight Preferences:
            <input
              type="text"
              name="flightPreferences"
              value={formData.flightPreferences}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Accommodation Preferences:
            <input
              type="text"
              name="accommodationPreferences"
              value={formData.accommodationPreferences}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Special Requests:
            <input
              type="text"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>

        {/* Additional Travelers */}
        {formData.numberOfTravelers > 1 && (
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Additional Travelers</h2>
            {formData.additionalTravelers.map((traveler, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Traveler {index + 1}</h3>
                <label className="block mb-2">
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={traveler.fullName}
                    onChange={(e) => handleAdditionalTravelerChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </label>
                <label className="block mb-2">
                  Date of Birth:
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={traveler.dateOfBirth}
                    onChange={(e) => handleAdditionalTravelerChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </label>
                <label className="block mb-2">
                  Passport Number:
                  <input
                    type="text"
                    name="passportNumber"
                    value={traveler.passportNumber}
                    onChange={(e) => handleAdditionalTravelerChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeAdditionalTraveler(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                >
                  Remove Traveler
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addAdditionalTraveler}
              className="bg-[#FCAF58] text-white px-4 py-2 rounded font-semibold"
            >
              Add Another Traveler
            </button>
          </div>
        )}

      
        {/* Additional Documents */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Additional Documents</h2>
          <label className="block mb-2">
            Visas:
            <input
              type="text"
              name="visas"
              value={formData.visas}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Travel Insurance:
            <input
              type="text"
              name="travelInsurance"
              value={formData.travelInsurance}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Health Records:
            <input
              type="text"
              name="healthRecords"
              value={formData.healthRecords}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Vaccination Records:
            <input
              type="text"
              name="vaccinationRecords"
              value={formData.vaccinationRecords}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <input
              type="text"
              name="price"
              value={formData.packagePrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded hidden"
            />
        </div>

<div className='flex justify-end'>

        <button
          type="submit"
          className="bg-[#FCAF58] text-white text-2xl px-6 font-semibold py-2 rounded-lg"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
