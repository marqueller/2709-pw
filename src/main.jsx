import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Assistir from './Assistir.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/assistir',
    element: <Assistir />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Home',
    element: <Home />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

