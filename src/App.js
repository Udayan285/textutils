
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [colText, setColText] = useState('Enable light mode')
  const [colo, setColo] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark');
      setColText('Enable Light Mode')
      setColo('light')
      document.body.style.backgroundColor="#2c2a2f"
      document.body.style.color="white"
      showAlert('Dark mode has been enabled','success')
      document.title= "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      setColText('Enable Dark Mode')
      setColo('dark')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert('Light mode has been enabled','success')
      document.title= "TextUtils - Light Mode"
    }
  }
 
  
  return (
    <>
    {/* <Router> */}
      <Navbar logo="TextUtils" mode={mode} modeChange={toggleMode} titleText={colText} col={colo}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm heading="TextUtils - Word counter, Character counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>
      {/* <Routes>
        <Route exact path="/" element={<TextForm heading="TextUtils - Word counter, Character counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>}/>
        <Route exact path="/about"  element={<About mode={mode}/>}/>      
      </Routes> */}
      </div> 
    {/* </Router> */}
    </>
  );
}

export default App;
