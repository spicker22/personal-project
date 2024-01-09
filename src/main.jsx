import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css'
import axios from 'axios';
import store from './ducks/store.js'

import App from './App.jsx'
import About from './pages/About.jsx'
import AccountPage from  './pages/AccountPage.jsx'
import DoctorDetailPage from './pages/DoctorDetailPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/Login.jsx'


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

        {                                 // Child route (AccountPage)
          path: "/account/:id",
          element: <AccountPage />,
          loader: async ({params}) => {
            const res = await axios.get(`/api/account/${params.id}`)
            return { account: res.data }
          }
        },
      ]
  },

  {                                 // Child route (Login page)
    path: "/login",
    element: <LoginPage />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider> 
  </React.StrictMode>,
)