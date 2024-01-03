import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import axios from 'axios';
import DoctorDetailPage from './components/DoctorDetailPage.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter([
  
  // Parent route (landing page)
  {
    path: "/" ,
    element: <App />,
    children: [
  
        // Child route (DoctorDetailPage)
        {
          path: "/doctor/:id",
          element: <DoctorDetailPage />,
          loader: async ({params}) => {
            const res = await axios.get(`/api/doctor/${params.id}`)
            return { doctor: res.data }
          }
        },

        // Child route (about page)
        {
          path: "/about",
          element: <About />,
      
        },
      ]

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



// Put the routes back in their proper parent child format 




