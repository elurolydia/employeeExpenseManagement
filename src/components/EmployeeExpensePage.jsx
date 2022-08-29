import React, { useState } from 'react'
import Location from '../images/Location.png'
import './page2.css'

const EmployeeExpensePage = ({image, name, job, location, department}) => {

  const [formInput, setFormInput] = useState({
    date: '',
    merchant: '',
    amount: '',
    status: '',
    comment: ''
  })

  const [data, setData] = useState ([])

  console.log(formInput)
  function formInputChange (e) {
    const {name, value} = e.target;

        setFormInput(prevItem => ({...prevItem, [name] : value}))
  }

  function fillTable (e) {
    e.preventDefault();
    setData(prev => { 
      return [...prev, formInput]
    })
    
    
    setFormInput({
      date: '',
      merchant: '',
      amount: '',
      status: '',
      comment: ''
    })
  }

  console.log(data)
  return (
    <div className='page2'>
        <form  name='form' className='expenseForm' onSubmit={fillTable}>
          <h3>Fill expense form</h3>
          <label htmlFor='date'>Date</label>
          <input type="date" name='date' value={formInput.date} onChange={formInputChange} required/>
          <br />
          <label htmlFor="merchant">Merchant</label>
          <select name="merchant" id="merchant" onChange={formInputChange} value={formInput.merchant} required>
            <option value=""></option>
            <option value="Parking">Parking</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Electronics">Electronics</option>
            <option value="Airline">Airline</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Shuttle">Shuttle</option>
            <option value="Taxi">Taxi</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Hotel">Hotel</option>
            <option value="Rental Car">Rental Car</option>
            <option value="Office supplies">Office Supplies</option>
          </select>
          <br />
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" value={formInput.amount} onChange={formInputChange} required/>
          <br />
          <label htmlFor="status">Status</label>
          <select name="status" id="status" onChange={formInputChange} value={formInput.status} required> 
            <option value=""></option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Reimbursed">Reimbursed</option>
          </select>
          <br />
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" value={formInput.comment} onChange={formInputChange}/>
          <br />
          <button className='update'>Update</button>
        </form>

        <div className='beforeTable'>
            <div id='filterDiv'>
              <label htmlFor="filter">Filter by: </label>
              <select name="filter" id="filter">
                <option value="volvo">None</option>
                <option value="volvo">Date</option>
                <option value="saab">Merchant</option>
                <option value="opel">Amount</option>
                <option value="audi">Status</option>
              </select>
            </div>
            <div> Display: None</div>
            <div className='total'>TOTAL =  ₦40,000</div>
          </div>

          <div className='table'>
            <table>
              <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Merchant</th>
                <th>Amount(₦)</th>
                <th>Status</th>
                <th>Comment</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>29/08/2022</td>
                <td>Airline</td>
                <td>31,000</td>
                <td>In Progress</td>
                <td>Business trip</td>
              </tr>
              <tr>
                <td>99</td>
                <td>29/08/2022</td>
                <td>Restaurant</td>
                <td>31,000</td>
                <td>Reimbursed</td>
                <td>Business trip</td>
              </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.date}</td>
                      <td>{val.merchant}</td>
                      <td>{val.amount}</td>
                      <td>{val.status}</td>
                      <td>{val.comment}</td>
                    </tr>
          )
        })}
              </tbody>
            </table>
          </div>

          <div className='employeeCard'>
            <p className='employee'>Employee</p>
            <img src={image} alt="Employee's Profile Picture" />
            <h2>{name}</h2>
            <h3>{job}</h3>
            <p className='small'><img src={Location} alt='Icon'/>{location}</p>
            <p className='dept'>{department}</p>
          </div>
        
    </div>
  )
}

export default EmployeeExpensePage




{/* <input type="checkbox" checked={boolean state} onchange={} name='friendly'/>
<label htmlFor='is friendly'></label> */}