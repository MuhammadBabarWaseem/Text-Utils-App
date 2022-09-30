import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')   //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

      setAlert(null);

    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#373737'
      showAlert("Dark Mode has been enabled!", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled!", "success")
    }
  }
  return <BrowserRouter>
    
      <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} />} />
        <Route exact path='/about' element = {<About mode = {mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
}
export default App;
