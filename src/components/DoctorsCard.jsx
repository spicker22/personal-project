import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useLoaderData, useNavigate } from 'react-router-dom';
import DoctorsName from './DoctorsName.jsx';
import './DoctorCard.css'

// Create the 'DoctorsCard'
const DoctorsCard = (props) => {

    const navigate = useNavigate()

     // Destructing the properties from initialDoctorData and others
     const {initialDoctorData, initialEditMode, deleteCard, currentData, setCurrentData} = props
 
    // 'useState' establishing the variable 'editMode' and function to change that state
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [doctorsName, setDoctorsName] = useState(initialDoctorData.name)
    // const [years, setYears] = useState(initialDoctorData.years)
    // const [address, setAddress] = useState(initialDoctorData.address)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
        const bodyObj = {
            DoctorsName: doctorsName
        }

        /// Doing a put request to that parameter, then pass in a body object (bodyObj)
        axios.put(`/api/doctor/${initialDoctorData.id}` , bodyObj)                
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
            setIsEditing(false)
        })
        .catch((theseHands) => {
            console.log(theseHands);
        })
    }

    function getDoctorDetails() {
        navigate(`/api/doctor`)
        console.log("on click working");
    }

    return (
        <div>
        <div className = "card" onClick={getDoctorDetails} >
            {doctorsName}
            </div>
        </div>
    )
}
export default DoctorsCard