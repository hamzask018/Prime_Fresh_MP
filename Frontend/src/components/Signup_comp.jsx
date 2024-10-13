/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';


const Signup_comp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const [step, setStep] = useState(1); // Step state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call for signup here
    if (step === 2) {
      console.log(formData);
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="  flex items-center justify-center top-2">
      <div className="w-full max-w-4xl flex bg-green-500 shadow-lg rounded-lg overflow-hidden">
        <div className="hidden lg:flex w-1/3 bg-white items-center justify-center p-6">
          <p className="text-green-500 text-lg font-bold italic">
            "Empowering your journey, one step at a time."
          </p>
        </div>
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-1">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full p-3 border rounded-md focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-3 mt-6 bg-white text-green-500 font-semibold rounded-md hover:bg-green-600 hover:text-white transition duration-300"
                  onClick={nextStep}
                >
                  Next
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-semibold mb-1">Street</label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Enter your street"
                        className="w-full p-3 border rounded-md focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        className="w-full p-3 border rounded-md focus:outline-none"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white font-semibold mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="Enter your state"
                          className="w-full p-3 border rounded-md focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-1">Zip Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="Enter your zip code"
                          className="w-full p-3 border rounded-md focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-semibold mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Enter your country"
                          className="w-full p-3 border rounded-md focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    className="py-2 px-4 bg-white text-green-500 font-semibold rounded-md hover:bg-green-600 hover:text-white transition duration-300"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-white text-green-500 font-semibold rounded-md hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    Register
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup_comp;
