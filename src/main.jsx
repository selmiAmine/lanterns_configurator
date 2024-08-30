import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ModelPreview from './components/client/ModelPreview.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import DiamondDemo from './components/client/DiamondDemo.jsx';
import Login from './components/client/Login.jsx';
import Signup from './components/client/Signup.jsx';
import Configurator from './components/client/Configurator.jsx';
import { UserExperience } from './components/shared/UserExperience.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    
    <React.StrictMode>
    
      <Routes>
        <Route exact path="/testRoute" element={<App />} />
        <Route exact path="/clientPreview" element={<ModelPreview />} />
        <Route exact path="/" element={<DiamondDemo />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/UserExperience" element={<UserExperience />}>
          <Route exact path="/UserExperience/Configurator" element={<Configurator />} />
        </Route>


        

      </Routes>
      
    </React.StrictMode>

  </BrowserRouter>


)
