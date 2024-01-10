import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import AccountDoctorCard from '../components/AccountDoctorCard.jsx'


function AccountPage(props) {
  const { account } = useLoaderData()
  const [currentData, setCurrentData] = useState(account)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(account.doctors)

console.log('data' ,currentData);

  // Delete account function
  const deleteAccount = () => {
    const confirmDelete = window.confirm('Sure want to delete account?')    // Variable: confirm user wants to delete account

    if (confirmDelete) {                                                     // Confirm if statement
      axios.delete(`/api/account/${currentData.accountId}`)
        .then((res) => {
        })
        .catch((error) => {
        })
    }
  }

  // console.log(currentData.doctors[0].name);
  // How get data for account page?
  // How will pass it though doctors card page?
  const doctorList = currentData.doctors.map((doctor) => {
    console.log(doctor);
    return <AccountDoctorCard
      setCurrentData={setCurrentData}
      accountId={doctor.accountId}
      doctorId={doctor.doctorId}
      key={doctor.doctorId}
      name={doctor.name}
      phoneNumber={doctor.phoneNumber}
    />
  }
  )

  // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons (put all this in a loop)
  return (
    <>
      <p>{currentData.accountId}</p>
     
      <button onClick={() => deleteAccount()}>Delete</button>
      <br></br>

      {doctorList}

    </>
  )
}
export default AccountPage










// // AccountPage function
// function AccountPage(props) {
//   const { account } = useLoaderData()
//   const [currentData, setCurrentData] = useState(account)
//   const [isEditing, setIsEditing] = useState(false)
//   const [editedData, setEditedData] = useState(account.doctors)
  
//     const handleEditChange = (index, field, value) => {               // Declare 'handleEditChange function
//       const newEditedData = [...editedData]                           // Utilizing the spread operator, the editedData array is copied into a new array
//       newEditedData[index][field] = value
//       setEditedData(newEditedData)
//     }
  
//     const doctorList = currentData.doctors.map((doctor, index) =>
//       isEditing ? (
//         <div key={doctor.doctorId}>
//           <input
//             value={editedData[index].name}
//             onChange={(e) => handleEditChange(index, 'name', e.target.value)}
//           />
//           <input
//             value={editedData[index].phoneNumber}
//             onChange={(e) => handleEditChange(index, 'phoneNumber', e.target.value)}
//           />
//         </div>
//       ) : (
//         <AccountDoctorCard
//           key={doctor.doctorId}
//           name={doctor.name}
//           phoneNumber={doctor.phoneNumber}
//         />
//       )
//     )

//     return (
//       <>
//         <p>{currentData.accountId}</p>
//         {isEditing ? (
//           <button onClick={() => { setIsEditing(false); /* Add code to save editedData to server */ }}>Save</button>
//         ) : (
//           <>
//             <button onClick={() => setIsEditing(true)}>Edit</button>
//             <button onClick={() => deleteAccount()}>Delete</button>
//           </>
//         )}
//         <br></br>
  
//         {doctorList}
  
//       </>
//     )
//   }