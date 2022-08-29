import React from 'react';
import Profile from "./Profile";


const CreateProfilePage = ({onChange, inputValues, submit, image, changeImage}) => {

  return (
    <form className='form'>
        <div>
            <Profile  image={image} changeImage={changeImage}/>
        </div>
        <div className='formInputs'> 
            <div>
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" placeholder="Type name" name='name' className='input' onChange={onChange} value={inputValues.name} required/>
            </div>
            <div>
                <label htmlFor="jobDescription" className='label'>Job Description</label>
                <textarea type="text" placeholder="Type job description" name='jobDescription' className='input textarea' onChange={onChange} value={inputValues.jobDescription} required/>
            </div>
            <div>
                <label htmlFor="location" className='label'>Location</label>
                <input type="text" placeholder="Type location" name='location' className='input' onChange={onChange} value={inputValues.location} required/>
            </div>
            <div>
                <label htmlFor="department" className='label'>Department</label>
                <input type="text" placeholder="Type department" name='department' className='input' onChange={onChange} value={inputValues.department} required/>
            </div>
            <button className='formButton' onClick={submit}>Create Employee Profile</button>
        </div>
    </form>
  )
}

export default CreateProfilePage