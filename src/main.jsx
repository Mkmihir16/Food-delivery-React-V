import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Contexapi } from '../Context/Contexapi.jsx'
import Contex from '../Context/Contexapi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
<Contex>
    <App/>
</Contex>
  
  </BrowserRouter>
  
   )
