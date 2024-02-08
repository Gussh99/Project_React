import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWordApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp 
      user={ {name:'Gustavo',lastname:'Vela'}} 
      id={ 3 }
      title = 'Hola Mundo'
    />
  </React.StrictMode>,
)
