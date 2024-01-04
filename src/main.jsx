import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import axios from 'axios';
import DoctorDetailPage from './components/DoctorDetailPage.jsx'
import About from './components/About.jsx'
import LandingPage from './components/LandingPage.jsx'
import LoginPage from './components/Login.jsx'

const router = createBrowserRouter([
  
  {
    path: "/" ,                           // Parent route (landing page)
    element: <App />,
    children: [
        
        {                                 // Child route (default)
          index: true,
          element: <LandingPage />,
        },  
        
        {                                 // Child route (DoctorDetailPage)
          path: "/doctor/:id",
          element: <DoctorDetailPage />,
          loader: async ({params}) => {
            const res = await axios.get(`/api/doctor/${params.id}`)
            return { doctor: res.data }
          }
        },
        
        {                                 // Child route (about page)
          path: "/about",
          element: <About />,
        },

        {                                 // Child route (Login page)
          path: "/login",
          element: <LoginPage />,
        },
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)