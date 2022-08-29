import { useState } from "react";
import Navbar from "./components/Navbar";
import CreateProfilePage from "./components/CreateProfilePage";
import EmployeeExpensePage from "./components/EmployeeExpensePage";



function App() {
  const [image, setImage] = useState("https://raw.githubusercontent.com/OlgaKoplik/CodePen/master/profile.jpg")
  
  function changeImage (e) {
    const chosenFile = e.target.files[0];
    if (chosenFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            setImage(reader.result);
        })

        reader.readAsDataURL(chosenFile);
    }
  }
  
  
  const [inputValues, setInputValues] = useState({
    name: "",
    jobDescription: "",
    location: "",
    department: ""
  })

  const [readyToRoute, setReadyToRoute] = useState(true)

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
        <EmployeeExpensePage image={image} name={inputValues.name} job={inputValues.jobDescription} location={inputValues.location} department={inputValues.department}/> :
        <CreateProfilePage  onChange = {inputChange} inputValues={inputValues} submit={submit} image={image} changeImage={changeImage}/> 
      }
    </div>
  )
}

export default App
