import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import axios from 'axios';

// Child components
import DoctorDetailPage from './components/DoctorDetailPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
  
      <Route
        path='api/doctor'
        element={<DoctorDetailPage />}
        loader={async ({params}) => {
          const res = await axios.get(`/api/doctor/${params.doctorId}`)
          return { doctor: res.data }
        }}
      />
      </Route>,
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)