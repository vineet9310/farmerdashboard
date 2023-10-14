import React, { useState } from 'react';
import './Overview.css';

const FarmerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    aadharNumber: '',
    email: '',
    streetAddress: '',
    city: '',
    tehsil: '',
    district: '',
    state: '',
    postalCode: '',
    country: '',
    // nationality: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process and submit the form data to your backend or perform any other actions here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='farmer-container'>
      <h1>Farmer Details</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-fullname'>
          <label htmlFor='fullName'>Full Name:</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-DOB'>
          <label htmlFor='dateOfBirth'>Date of Birth:</label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-gender'>
          <label htmlFor='gender'>Gender:</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value=''>Select the gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className='form-number'>
          <label htmlFor='phoneNumber'>Phone Number:</label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-aadhar'>
          <label htmlFor='aadharNumber'>Aadhar Number:</label>
          <input
            type='number'
            id='aadharNumber'
            name='aadharNumber'
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-Email'>
          <label htmlFor='email'>Email Address:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-education'>
          <label htmlFor='education'>Education:</label>
          <input
            type='text'
            id='education'
            name='education'
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-address'>
          <label htmlFor='streetAddress'>Street Address:</label>
          <input
            type='text'
            id='streetAddress'
            name='streetAddress'
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-city'>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-tehsil'>
          <label htmlFor='tehsil'>Tehsil:</label>
          <input
            type='text'
            id='tehsil'
            name='tehsil'
            value={formData.tehsil}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-district'>
          <label htmlFor='district'>District:</label>
          <input
            type='text'
            id='district'
            name='district'
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-state'>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            id='state'
            name='state'
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-postalcode'>
          <label htmlFor='postalCode'>Postal Code:</label>
          <input
            type='text'
            id='postalCode'
            name='postalCode'
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-country'>
          <label htmlFor='country'>Country:</label>
          <input
            type='text'
            id='country'
            name='country'
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className='form-nationality'>
          <label htmlFor='nationality'>Nationality/Citizenship:</label>
          <input
            type='text'
            id='nationality'
            name='nationality'
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div> */}
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default FarmerForm;
