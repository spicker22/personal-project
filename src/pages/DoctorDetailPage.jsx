import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './DoctorDetailPage.css'

// DoctorDetailPage component
function DoctorDetailPage() {
    let { doctor } = useLoaderData();     // Get userId param from URL using 'useLoaderData()

    return (
        <div className='profile-body'>
            <img src={doctor.imgURL} alt={doctor.name} className="doctor-card-img2" />
            <h2 className="doctorName">{doctor.name}</h2>
            <br></br>
            <h2 className="header">City</h2>
            <h2 className="text">{doctor.address}</h2>
            <h2 className="header">Phone Number</h2>
            <h2 className="text">{doctor.phoneNumber}</h2>
        </div>
    )
}
export default DoctorDetailPage

