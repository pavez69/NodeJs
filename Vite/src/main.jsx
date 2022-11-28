import React from 'react';
import ReactDom from 'react-dom/client'

import {CounterApp2}  from './CounterApp2'

import './style.css';



ReactDom.createRoot( document.getElementById ('root')).render(

  <React.StrictMode>

    <CounterApp2 value={11}/>

  </React.StrictMode>




)