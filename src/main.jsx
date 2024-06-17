import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ModelPreview from './components/client/ModelPreview.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import DiamondDemo from './components/client/DiamondDemo.jsx';
import Login from './components/client/Login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/testRoute" element={<App />} />
        <Route exact path="/clientPreview" element={<ModelPreview />} />
        <Route exact path="/" element={<DiamondDemo />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </React.StrictMode>

  </BrowserRouter>


)
