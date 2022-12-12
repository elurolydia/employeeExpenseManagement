import React, { useState, useEffect, Fragment } from 'react';
import { nanoid } from "nanoid";
import Location from '../images/Location.png';
import infoData from './data';
import './page2.css';
import EditableRow from './EditableRow';

const EmployeeExpensePage = ({image, name, job, location, department}) => {

  const [formInput, setFormInput] = useState({
    id:nanoid(),
    date: '',
    merchant: '',
    amount: '',
    status: '',
    comment: ''
  })

  const [data, setData] = useState (infoData);
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
      id: '',
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
  // const [state, setState] = useState(<div></div>);

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
    
    if (value === 'none'){
      setFilterInput({from: ' ', to: ' ', merchant: ' ', amountFrom: 0, amountTo: 0, status: ' '})
      setFilteredData([])
    }
    else if (value === 'date'){
      setFilterInput((prev)=> { return {...prev, merchant: ' ', amountFrom: 0, amountTo: 0, status: ' '}})
    }
    else if (value === 'merchant'){
      setFilterInput((prev)=> { return {...prev, from: ' ', to: ' ', amountFrom: 0, amountTo: 0, status:0}})
    }
    else if (value === 'amount') {
      setFilterInput((prev)=> { return {...prev,from: ' ', to: ' ', merchant: ' ', status: ' '}})
    }
    else if (value === 'status') {
      setFilterInput((prev)=> { return {...prev, from: ' ', to: ' ', merchant: ' ', amountFrom: 0, amountTo: 0}})
    }
  }

  const ele = data.map(val => {return val});

  function check (e) {
    e.preventDefault();

    let fil= [];
    

    if((topDisplay==='date') && filterInput.from && filterInput.to){
      fil = ele.filter(el=>{if (el.date>=filterInput.from && el.date<=filterInput.to){return el}});
    }
    else if(topDisplay==='merchant' && filterInput.merchant){
      fil = ele.filter(el=>{if (el.merchant === filterInput.merchant){return el}});
    }
    else if((topDisplay==='amount') && filterInput.amountFrom && filterInput.amountTo){
      fil = ele.filter(el=>{if (el.amount>=parseInt(filterInput.amountFrom) && el.amount<=parseInt(filterInput.amountTo)){return el}});  
    }
    else if (topDisplay==='status' && filterInput.status){
      fil = ele.filter(el=>{if (el.status === filterInput.status){return el}});
    }

    setFilteredData(fil)

  }
  

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
  },[elements, data, filteredData])


  


const [editValId, setEditValId] = useState(null);

const [editFormData, setEditFormData] = useState({
  date: '',
  merchant: '',
  amount: '',
  status: '',
  comment: ''
})

const handleEditClick = (event, val) => {
  event.preventDefault();
  setEditValId(val.id);

  const formValues = {
    date: val.date,
    merchant: val.merchant,
    amount: val.amount,
    status: val.status,
    comment: val.comment
  }

  setEditFormData(formValues);
}


function handleEditFormChange (event) {
  event.preventDefault();

  const {name,value} = event.target

  const newFormData = {...editFormData}
  newFormData[name] = value;

  setEditFormData(newFormData);
}



function handleEditFormSubmit (event) {
  event.preventDefault();

  const editedContact = {
    id: editValId,
    date: editFormData.date,
    merchant: editFormData.merchant,
    amount: editFormData.amount,
    status: editFormData.status,
    comment: editFormData.comment
  }

  const newData = [...data];
  
  const index = data.findIndex((val)=> val.id === editValId)
  newData[index] = editedContact;

  if (topDisplay !== 'none') {
    const newFilteredData = [...filteredData];
  
    const Findex = filteredData.findIndex((val)=> val.id === editValId)
    newFilteredData[Findex] = editedContact;
  
    setFilteredData(newFilteredData);
    setEditValId(null);

    // if((topDisplay==='date') && filterInput.from && filterInput.to){
    //   fil = newFilteredData.filter(el=>{if (el.date>=filterInput.from && el.date<=filterInput.to){return el}});
    // }
    // else if(topDisplay==='merchant' && filterInput.merchant){
    //   fil = newFilteredData.filter(el=>{if (el.merchant === filterInput.merchant){return el}});
    // }
    // else if((topDisplay==='amount') && filterInput.amountFrom && filterInput.amountTo){
    //   fil = newFilteredData.filter(el=>{if (el.amount>=parseInt(filterInput.amountFrom) && el.amount<=parseInt(filterInput.amountTo)){return el}});  
    // }
    // else if (topDisplay==='status' && filterInput.status){
    //   fil = newFilteredData.filter(el=>{if (el.status === filterInput.status){return el}});
    // }

    // setFilteredData(fil)
  }

  setData(newData);
  setEditValId(null);
}

function handleCancelClick () {
  setEditValId(null);
}


function handleDeleteClick (valId) {
  const newDataInfo = [...data];
  const index = data.findIndex((val) => val.id === valId);

  newDataInfo.splice(index, 1);

  if (topDisplay !== 'none') {
    const newFilteredDataInfo = [...filteredData];
    const Findex = filteredData.findIndex((val) => val.id === valId);

    newFilteredDataInfo.splice(Findex, 1)

    setFilteredData(newFilteredDataInfo)
  }

  setData(newDataInfo);
}

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
            <option value="Fast food">Fast food</option>
            <option value="Hotel">Hotel</option>
            <option value="Rental Car">Rental Car</option>
            <option value="Ride sharing">Ride sharing</option>
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
            <form>
              {topDisplay === 'none'&& <div></div>}
              {topDisplay === 'date'&& <div className='appearingDiv'>
                <div>
                  <label htmlFor="from" style={{marginRight: '9px'}}>From:</label>
                  <input type="date" id='from' name='from' 
                  value={filterInput.from} 
                  onChange={filterInputChange} 
                  style={{ width:'115px',height:'30px', borderRadius:'5px', paddingLeft:'5px'}}/>
                </div>
                <div>
                  <label htmlFor="to" style={{marginRight: '9px'}}>To:</label>
                  <input type="date" id='to' name='to' value={filterInput.to} onChange={filterInputChange} style={{width:'115px', height:'30px', borderRadius:'5px', paddingLeft:'5px'}} />
                </div>
                <button onClick={check}>GO</button>
              </div>}
              {topDisplay === 'merchant'&& <div style={{display: 'flex', gap:'25px'}}>
                  <select name="merchant" id="merchant" 
                  value={filterInput.merchant} 
                  onChange={filterInputChange} 
                  style={{width:'200px', height:'35px',borderRadius:'5px', paddingLeft:'5px'}} >
                    <option value="">Choose</option>
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
                  <button onClick={check}>GO</button>
              </div>}
              {topDisplay === 'amount' && <div className='appearingDiv'>
                    <div>
                      <label htmlFor="amountFrom" style={{marginRight: '9px'}}>From:</label>
                      <input type="number" id='amountFrom' name='amountFrom' value={filterInput.amountFrom} onChange={filterInputChange} style={{ width:'115px',height:'30px', borderRadius:'5px', paddingLeft:'5px'}} />
                    </div>
                    <div>
                      <label htmlFor="amountTo" style={{marginRight: '9px'}}>To:</label>
                      <input type="number" id='amountTo'name='amountTo' value={filterInput.amountTo} onChange={filterInputChange} style={{width:'115px', height:'30px', borderRadius:'5px', paddingLeft:'5px'}} />
                    </div>
                    <button onClick={check}>GO</button>
              </div>}
              {topDisplay === 'status' && <div style={{display: 'flex', gap:'25px'}}>
                    <select name="status" id="status" onChange={filterInputChange} style={{width:'200px', height:'35px',borderRadius:'5px', paddingLeft:'5px'}}> 
                      <option value="">Choose</option>
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Reimbursed">Reimbursed</option>
                    </select>
                    <button onClick={check}>GO</button>
              </div>}
            </form>
            <div className='total'>TOTAL =  ₦{total.toLocaleString("en-US")} 
            </div>
          </div>

          <div className='table'>
            <form onSubmit={handleEditFormSubmit}>
              <table>
                <thead>
                <tr>
                  {/* <th>S/N</th> */}
                  <th>Date</th>
                  <th>Merchant</th>
                  <th>Amount(₦)</th>
                  <th>Status</th>
                  <th>Comment</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  {topDisplay === 'none'? 
                  data.map((val, id) => {
                    return (
                      <Fragment key={val.id}>
                        {editValId === val.id ?  (
                          <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />
                        ) : ( 
                          <tr>
                            {/* <td>{id + 1}</td> */}
                            <td>{val.date}</td>
                            <td>{val.merchant}</td>
                            <td>{parseInt(val.amount).toLocaleString("en-US")}</td>
                            <td>{val.status}</td>
                            <td>{val.comment}</td>
                            <td className='twoButtons'>
                              <button  type='button' onClick={(event)=> handleEditClick(event, val)}>Edit</button>
                              <button type='button' onClick={()=> handleDeleteClick(val.id)}>Delete</button>
                            </td>
                          </tr> 
                      )}
                      </Fragment>
                    )
                  }):
                  filteredData.map((val, id) => {
                    return (
                      <Fragment key={val.id}>
                        {editValId === val.id ?  (
                          <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />
                        ) : ( 
                          <tr>
                            {/* <td>{id + 1}</td> */}
                            <td>{val.date}</td>
                            <td>{val.merchant}</td>
                            <td>{parseInt(val.amount).toLocaleString("en-US")}</td>
                            <td>{val.status}</td>
                            <td>{val.comment}</td>
                            <td className='twoButtons'>
                              <button  type='button' onClick={(event)=> handleEditClick(event, val)}>Edit</button>
                              <button type='button' onClick={()=> handleDeleteClick(val.id)}>Delete</button>
                            </td>
                          </tr> 
                      )}
                      </Fragment>

                    )
                  })
                }
                </tbody>
              </table>
            </form>
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




