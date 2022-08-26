import React from 'react';
import Profile from "./Profile";


const CreateProfilePage = () => {
  return (
    <div className='form'>
        <div>
            <Profile />
        </div>
        <div className='formInputs'> 
            <div>
                <label htmlFor="name" className='label'>Name</label>
                <input type="text" placeholder="Type name" name='name' className='input'/>
            </div>
            <div>
                <label htmlFor="department" className='label'>Department</label>
                <input type="text" placeholder="Type department" name='department' className='input'/>
            </div>
            <div>
                <label htmlFor="location" className='label'>Location</label>
                <input type="text" placeholder="Type location" name='location' className='input'/>
            </div>
            <div>
                <label htmlFor="jobDescription" className='label'>Job Description</label>
                <textarea type="text" placeholder="Type job description" name='jobDescription' className='input textarea'/>
            </div>
            <button className='formButton'>Create Employee Profile</button>
        </div>
    </div>
  )
}

export default CreateProfilePage