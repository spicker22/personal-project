import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './DoctorDetailPage.css'

// DoctorDetailPage component
function DoctorDetailPage() {            
    let { doctor } = useLoaderData();     // Get userId param from URL using 'useLoaderData()

    return (
        <div className='profile-body'>
            <img src={doctor.imgURL} alt={doctor.name} className="doctor-card-img2"/>
            <h2>{doctor.name}</h2>
            <h2>City: {doctor.address}</h2>
            <h2>Phone Number: {doctor.phoneNumber}</h2>
        </div>
    )
  }
  export default DoctorDetailPage

