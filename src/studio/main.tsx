import React from 'react'
import ReactDOM from 'react-dom/client'
import Studio from './Studio'
import NavbarWithAside from './widgets/navbar-and-aside'
import AuthenticationWithImage from './widgets/auth-with-image'
import Dashboard from './widgets/dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('studio') as HTMLElement).render(
  <React.StrictMode>
    {/* <Dashboard></Dashboard> */}
    {/* <AuthenticationWithImage /> */}
    <Studio />
  </React.StrictMode>
)
