import React, { useState, useEffect } from 'react'
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

  const [data, setData] = useState ([]);
  const [filteredData, setFilteredData] = useState ([]);
  
  // console.log(formInput)
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

  const elements = data.map(va => {
    return (parseInt(va.amount))
  })

  const filteredElements = filteredData.map(va => {
    return (parseInt(va.amount))
  })

  const [total, setTotal] = useState(0)

  
  // console.log(elements)
    

  const [topDisplay, setTopDisplay] = useState('none')
  const [state, setState] = useState(<div></div>);

  const [filterInput, setFilterInput] = useState({
    from: '',
    to: '',
    merchant: '',
    amountFrom: '',
    amountTo: '',
    status: ''
  })

  function filterInputChange (e) {
    const {name, value} = e.target;

    setFilterInput (prev => ({...prev, [name] : value}))
  }

  // console.log(data);
  
  function filterFunction (e) {
    const {value} = e.target;

    setTopDisplay(value);
    
    if (value === 'none'){setState(<div></div>); setFilterInput({from: ' ', to: ' ', merchant: ' ', amountFrom: ' ', amountTo: ' ', status: ' '})}
    else if (value === 'date'){
      setState(<div style={{display: 'flex', gap:'40px'}}>
        <div>
          <label htmlFor="from" style={{marginRight: '12px'}}>From:</label>
          <input type="date" id='from' name='from'  onChange={filterInputChange} style={{width:'150px',height:'35px', borderRadius:'5px', paddingLeft:'5px'}}/>
        </div>
        <div>
          <label htmlFor="to" style={{marginRight: '12px'}}>To:</label>
          <input type="date" id='to' name='to' onChange={filterInputChange} style={{width:'150px', height:'35px', borderRadius:'5px', paddingLeft:'5px'}} />
        </div>
      </div>); setFilterInput({merchant: ' ', amountFrom: ' ', amountTo: ' ', status: ' '})
    }
    else if (value === 'merchant'){
      setState( <div>
          <select name="merchant" id="merchant" onChange={filterInputChange} style={{width:'200px', height:'35px',borderRadius:'5px', paddingLeft:'5px'}} >
            <option value="">Choose</option>
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
      </div>); setFilterInput({from: ' ', to: ' ', amountFrom: ' ', amountTo: ' ', status: ' '})
    }
    else if (value === 'amount') {
      setState(<div style={{display: 'flex', gap:'40px'}}>
        <div>
          <label htmlFor="amountFrom" style={{marginRight: '12px'}}>From:</label>
          <input type="number" id='amountFrom' name='amountFrom' onChange={filterInputChange} style={{width:'150px',height:'35px', borderRadius:'5px', paddingLeft:'5px'}} />
        </div>
        <div>
          <label htmlFor="amountTo" style={{marginRight: '12px'}}>To:</label>
          <input type="number" id='amountTo'name='amountTo' onChange={filterInputChange} style={{width:'150px', height:'35px', borderRadius:'5px', paddingLeft:'5px'}} />
        </div>
      </div>); setFilterInput({from: ' ', to: ' ', merchant: ' ', status: ' '})
    }
    else if (value === 'status') {
      setState(<div>
        <select name="status" id="status" onChange={filterInputChange} style={{width:'200px', height:'35px',borderRadius:'5px', paddingLeft:'5px'}}> 
            <option value="">Choose</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Reimbursed">Reimbursed</option>
          </select>
      </div>); setFilterInput({from: ' ', to: ' ', merchant: ' ', amountFrom: ' ', amountTo: ' '})
    }
  }

  const ele = data.map(val => {return val})
  useEffect(()=> {
    if(filterInput.from && filterInput.to){
      setFilteredData(ele.filter(el=>{if (el.date>=filterInput.from && el.date<=filterInput.to){return el}}))  
    }
    else if(filterInput.merchant){
      setFilteredData(ele.filter(el=>{if (el.merchant === filterInput.merchant){return el}}))  
    }
    else if(filterInput.amountFrom && filterInput.amountTo){
      setFilteredData(ele.filter(el=>{if (el.amount>=filterInput.amountFrom && el.amount<= filterInput.amountTo){return el}}))  
    }
    else if(filterInput.status){
      setFilteredData(ele.filter(el=>{if (el.status === filterInput.status){return el}}))  
    }
  },[elements])


  useEffect(()=> {
    let sum = 0;
    let filteredSum = 0;

    if(topDisplay === 'none'){
    for (const value of elements) {
      sum += value;
    }

    } else {
      for (const value of filteredElements) {
        filteredSum += value;
      }
    }
    
    setTotal(topDisplay === 'none' ? sum : filteredSum)
  },[elements])

  // console.log(filteredData)
  // console.log(data)
  // console.log(ele)
  console
  return (
    <div className='page2'>
        <form  name='form' className='expenseForm' onSubmit={fillTable}>
          <h3>Fill expense form</h3>
          <label htmlFor='date'>Date</label>
          <input type="date" name='date' value={formInput.date} onChange={formInputChange} required />
          <br />
          <label htmlFor="merchant">Merchant</label>
          <select name="merchant" id="merchant" onChange={formInputChange} value={formInput.merchant} required >
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
          <textarea name="comment" id="comment" value={formInput.comment} onChange={formInputChange} required/>
          <br />
          <button className='update'>Update</button>
        </form>

        <div className='beforeTable'>
            <div id='filterDiv'>
              <label htmlFor="filter">Filter by: </label>
              <select name="filter" id="filter" onChange={filterFunction}>
                <option value="none">None</option>
                <option value="date">Date</option>
                <option value="merchant">Merchant</option>
                <option value="amount">Amount</option>
                <option value="status">Status</option>
              </select>
            </div>
            <div>{state}</div>
            <div className='total'>TOTAL =  ₦{total.toLocaleString("en-US")} 
            </div>
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
                {topDisplay === 'none'? 
                data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.date}</td>
                      <td>{val.merchant}</td>
                      <td>{parseInt(val.amount).toLocaleString("en-US")}</td>
                      <td>{val.status}</td>
                      <td>{val.comment}</td>
                    </tr>
                  )
                }):
                filteredData.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.date}</td>
                      <td>{val.merchant}</td>
                      <td>{parseInt(val.amount).toLocaleString("en-US")}</td>
                      <td>{val.status}</td>
                      <td>{val.comment}</td>
                    </tr>
                  )
                })
              }
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