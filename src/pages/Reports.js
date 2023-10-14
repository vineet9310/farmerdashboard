import React, { useState } from 'react';
import './LandDetails.css';

const LandDetails = () => {
  const [formData, setFormData] = useState({
    nature: '',
    area: '',
    nature2: '',
    includedInHolding: '',
    notIncludedInHolding: '',
    sourceOfIrrigation: '',
    irrigableArea: '',
    kharif: '',
    rabi: '',
    zaid: '',
    physicalFeatures: '',
    soilClass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the formData to your backend
    console.log('Form Data:', formData);
  };

  return (
    <div className='land-details-form'>
      <h1>Land Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-nature'>
          <label htmlFor='nature'>1. Nature:</label>
          <input
            type='text'
            id='nature'
            name='nature'
            value={formData.nature}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-area'>
          <label htmlFor='area'>2. Area:</label>
          <input
            type='number'
            id='area'
            name='area'
            value={formData.area}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-uncultivatedarea'>
          <label htmlFor='area'>[Details of uncultivated area]</label>
        </div>
        <div className='form-nature2'>
          <label htmlFor='nature-2'>3.Nature:</label>
          <input
            type='text'
            id='nature-2'
            name='nature-2'
            value={formData.nature2}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-includedInHolding'>
          <label htmlFor='includedInHolding'>4. Included in Holding:</label>
          <input
            type='text'
            id='includedInHolding'
            name='includedInHolding'
            value={formData.includedInHolding}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-notIncludedInHolding'>
          <label htmlFor='notIncludedInHolding'>5. Not Included in Holding:</label>
          <input
            type='text'
            id='notIncludedInHolding'
            name='notIncludedInHolding'
            value={formData.notIncludedInHolding}
            onChange={handleChange}
            required
          />
        </div>
        <hr></hr>
        <div className='form-irrigation'>
          <label htmlFor='area'>[Details of irrigation]</label>
        </div>
        <div className='form-sourceOfIrrigation'>
          <label htmlFor='sourceOfIrrigation'>6. Source and Method of Irrigation:</label>
          <input
            type='text'
            id='sourceOfIrrigation'
            name='sourceOfIrrigation'
            value={formData.sourceOfIrrigation}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-irrigableArea'>
          <label htmlFor='irrigableArea'>7. Irrigable Area:</label>
          <input
            type='number'
            id='irrigableArea'
            name='irrigableArea'
            value={formData.irrigableArea}
            onChange={handleChange}
            required
          />
        </div>
        <hr></hr>

        <div className='form-generallygrown'>
          <label htmlFor='area'>[Crops generally grown during]</label>
        </div>
        <div className='form-kharif'>
          <label htmlFor='kharif'>8. Kharif:</label>
          <input
            type='text'
            id='kharif'
            name='kharif'
            value={formData.kharif}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-rabi'>
          <label htmlFor='rabi'>9. Rabi:</label>
          <input
            type='text'
            id='rabi'
            name='rabi'
            value={formData.rabi}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-zaid'>
          <label htmlFor='zaid'>10. Zaid:</label>
          <input
            type='text'
            id='zaid'
            name='zaid'
            value={formData.zaid}
            onChange={handleChange}
            required
          />
        </div>
        <hr></hr>

        <div className='form-physicalFeatures'>
          <label htmlFor='physicalFeatures'>11. Physical features of the plot showing in particular the area of <br/>uncultivated portions if not separately surveyed its level with <br/> respect to surrounding plots, if the plot is irrigable its distance <br/> from the source of irrigation and volume of water supply, etc.:</label>
          <input
            type='text'
            id='physicalFeatures'
            name='physicalFeatures'
            value={formData.physicalFeatures}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-soilClass'>
          <label htmlFor='soilClass'>12. Soil class as recorded in the current Settlement:</label>
          <input
            type='text'
            id='soilClass'
            name='soilClass'
            value={formData.soilClass}
            onChange={handleChange}
            required
          />
        </div>
        <button className="agree" type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LandDetails;
