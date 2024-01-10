import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

import DoctorsCard from '../components/DoctorsCard.jsx';      // Import DoctorsCard child component

const LandingPage = () => {
    const [categoryId, setCategoryId] = useState(1)           // Setting up useState variable & function (categoryId, setCategoryId)
    const handleClick = (value) => {                          // 'handleClick' function with parameter 'value'. The setCategory (button to update category)
      setCategoryId(value);                                   // Update state using 'setCategoryId function (button to update category)
    };

    const [currentData, setCurrentData] = useState([])        // Setting up useState variable & function (currentData, setCurrentData)
   
    useEffect(() => {axios.get(`/api/doctors/${categoryId}`).then((res) => {setCurrentData(res.data)})}, [categoryId])    // Using useEffect to get data from endpoint (/api/doctors)
   
    const doctorsListItems = currentData.map((doctor) => (    // Mapping over 'currentData' to get each element (each doctor)
      <DoctorsCard
        key={doctor.id}  
        name = {doctor.name}
        phoneNumber = {doctor.phoneNumber}
        id = {doctor.doctorId}
      />
    ))
  

    const b = { margin: '0 10px 0 0' }
    return (                                                    
    <> 
      <button style={b} onClick={() => handleClick(1)} >Dental</button>
      <button style={b} onClick={() => handleClick(2)}>Medical Scans</button>
      <button style={b} onClick={() => handleClick(3)}>Direct Primary Care</button>
      <button style={b} onClick={() => handleClick(4)}>IVF</button>
      <button style={b} onClick={() => handleClick(5)}>Colonoscopy</button>
      <button style={b} onClick={() => handleClick(6)}>Urgent Care</button>
      <button style={b} onClick={() => handleClick(7)}>Blood Tests</button>
      <button style={b} onClick={() => handleClick(8)}>Vascetomy</button>
      <button style={b} onClick={() => handleClick(8)}>LASIK</button>
      <button style={b} onClick={() => handleClick(8)}>Physical Therapy</button>
    <br></br>
      {doctorsListItems} 
    </>
    )
}
export default LandingPage



































// // The LandingPage function.
// const LandingPage = (props) => {

//     const navigate = useNavigate()

//     // currentData is the current state value.
//     // setCurrentData is the function to update the 'currentData state. 
//     // Triggers a re-render of the component when the state changes.
//     const [currentData, setCurrentData] = useState([])
//     console.log(currentData);

//     // Ensures axios request runs when page loads. (Boilerplate for useEffect axios request)    
//     useEffect(() => {
//         axios.get('/api/doctors')
//         .then((res) => {
//             console.log(res.data)
//             setCurrentData(res.data)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }, [] )      // Add a '[]' b/c only want to trigger this use Effect when page loads.

//     // Creates an array of 'DoctorCard' components, each representing a card on Landing page. 
//     // All the items in the 'DoctorCard' return are the associated properties. 
//     // The map function is used to iterate over each element (el) in the currentData array.
//     function getDoctorDetails(id) {
//         navigate(`/api/doctor/${id}`)
//         console.log("on click working");
//     }
    
//     const rows = currentData.map((doc) => {
//         return (
//             <div >
//                 <DoctorsCard 
//                     initialDoctorData={doc} 
//                     initialEditMode={false} 
//                     key={doc.id}
//                     deleteCard={() => deleteCard(doc.id)}
//                     currentData={currentData}
//                     setCurrentData={setCurrentData}
//                 />
//             </div>
//         )
//         })

//   return (
//     <>
//     <div>Doctors Offices</div>

//     {/* The 'rows' is taken from above. Here it is just being populated in the HTML */} 
//     <div>{rows}</div>
//     </>
//   )
// }
// export default LandingPage