import React from 'react'
import Location from '../images/Location.png'
import './page2.css'

const EmployeeExpensePage = ({image, name, job, location, department}) => {
  return (
    <div className='page2'>
        <div className='expenseForm'>
          <h3>Fill expense form</h3>
          <label htmlFor='date'>Date</label>
          <input type="date" name='date' />
        </div>

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
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Merchant</th>
                <th>Amount(₦)</th>
                <th>Status</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>1</td>
                <td>29/08/2022</td>
                <td>Airline</td>
                <td>31,000</td>
                <td>In Progress</td>
                <td>Business triphhhhhhhhhhhhhhhhhhhhhhh</td>
              </tr>
              <tr>
                <td>999</td>
                <td>29/08/2022</td>
                <td>Restaurant</td>
                <td>31,000</td>
                <td>Reimbursed</td>
                <td>Business trip</td>
              </tr>
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