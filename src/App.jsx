import { useState } from "react";
import Navbar from "./components/Navbar";
import CreateProfilePage from "./components/CreateProfilePage";
import EmployeeExpensePage from "./components/EmployeeExpensePage";



function App() {
  const [inputValues, setInputValues] = useState({
    name: "",
    jobDescription: "",
    location: "",
    department: ""
  })

  const [readyToRoute, setReadyToRoute] = useState(false)

  function inputChange (e) {
    const {name, value} = e.target;

        setInputValues(prevItem => ({...prevItem, [name] : value}))
  }

  function submit (e) {
    e.preventdefault; 
    
    if (inputValues.name && inputValues.jobDescription && inputValues.location && inputValues.department) {
      setReadyToRoute(true)
    }
  }

  return (
    <div className="app">
      <Navbar />
      { 
        readyToRoute ? 
        <EmployeeExpensePage /> :
        <CreateProfilePage  onChange = {inputChange} inputValues={inputValues} submit={submit}/> 
      }
    </div>
  )
}

export default App
