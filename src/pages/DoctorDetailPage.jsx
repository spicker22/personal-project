import React from 'react'
import { useLoaderData } from 'react-router-dom';

// DoctorDetailPage component
function DoctorDetailPage() {            
    let { doctor } = useLoaderData();     // Get userId param from URL using 'useLoaderData()

    return (
        <div className = "card" >
            <h2>{doctor.doctorId}</h2>
            <h2>{doctor.name}</h2>
            <h2>{doctor.address}</h2>
        </div>
    )
  }
  export default DoctorDetailPage

