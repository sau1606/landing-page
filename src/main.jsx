import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router, RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)