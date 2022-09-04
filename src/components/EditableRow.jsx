import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        {/* <td>
            <input type="number" name='id' required />
        </td> */}
        <td>
            <input className='editDate' type="date" name='date' onChange={handleEditFormChange} value={editFormData.date} required />
        </td>
        <td>
            <select name="merchant" value={editFormData.merchant} onChange={handleEditFormChange} required >
                <option value=""></option>
                <option value="Parking">Parking</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Electronics">Electronics</option>
                <option value="Airline">Airline</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Shuttle">Shuttle</option>
                <option value="Taxi">Taxi</option>
                <option value="Fast food">Fast food</option>
                <option value="Hotel">Hotel</option>
                <option value="Rental Car">Rental Car</option>
                <option value="Ride sharing">Ride sharing</option>
                <option value="Office supplies">Office Supplies</option>
            </select>
        </td>
        <td>
            <input className='editAmount' type="number" name="amount" value={editFormData.amount} onChange={handleEditFormChange}required/>
        </td>
        <td>
            <select name="status" value={editFormData.status} onChange={handleEditFormChange} required> 
                <option value=""></option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Reimbursed">Reimbursed</option>
            </select>
        </td>
        <td>
            <textarea className='editComment' name="comment" onChange={handleEditFormChange} value={editFormData.comment} required/>
        </td>
        <td className='twoButtons'>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default EditableRow