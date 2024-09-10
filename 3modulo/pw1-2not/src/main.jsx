import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Assistir } from './pages/Assistir.jsx'
import { Login } from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/assistir",
    element: <Assistir />
  },
  {
    path: "/login",
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
