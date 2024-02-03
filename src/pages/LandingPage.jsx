import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import './LandingPage.css'
import DoctorsCard from '../components/DoctorsCard.jsx';

// LandingPage component
const LandingPage = () => {
    const [categoryId, setCategoryId] = useState(1)               // Setting up useState variable & function (categoryId, setCategoryId)
    const handleClick = (value) => {                              // 'handleClick' function with parameter 'value'. The setCategory (button to update category)
      setCategoryId(value);                                       // Update state using 'setCategoryId function (button to update category)
    };
    const [currentData, setCurrentData] = useState([])            // Setting up useState variable & function (currentData, setCurrentData)
    useEffect(() => {axios.get(`/api/doctors/${categoryId}`)      // Using useEffect to get data from endpoint (/api/doctors) 
      .then((res) => {setCurrentData(res.data)})}, [categoryId])  // Update state using 'setCurrentData' function
    const doctorsListItems = currentData.map((doctor) => (        // Mapping over 'currentData' to get each element (each doctor)
      <DoctorsCard
        key={doctor.id}  
        name = {doctor.name}
        phoneNumber = {doctor.phoneNumber}
        imgURL = {doctor.imgURL}
        address = {doctor.address}
        id = {doctor.doctorId}
      />
    ))
  
    return (                                                    
    <> 
      <button className="catButton" onClick={() => handleClick(1)}>Dental</button>
      <button className="catButton" onClick={() => handleClick(2)}>Medical Scans</button>
      <button className="catButton" onClick={() => handleClick(3)}>Direct Primary Care</button>
      <button className="catButton" onClick={() => handleClick(4)}>IVF</button>
      <button className="catButton" onClick={() => handleClick(8)}>Vasectomy</button>
      <button className="catButton" onClick={() => handleClick(9)}>LASIK</button>
      <br></br>
      <div id='dan'> {doctorsListItems} </div>
    </>
    )
}
export default LandingPage