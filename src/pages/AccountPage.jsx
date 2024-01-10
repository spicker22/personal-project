import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';


// import AccountDoctorCard from './components/AccountDoctorCard.jsx'



function AccountPage(props) {
  const { account } = useLoaderData()



  // Delete account function
  const deleteAccount = () => {
   const confirmDelete = window.confirm('Sure want to delete account?')    // Variable: confirm user wants to delete account

   if(confirmDelete) {                                                     // Confirm if statement
    axios.delete(`/api/account/${account.accountId}`)
      .then((res) => {
      })
      .catch((error) => {
      })
  }
  }


// const doctorList = 'something'  .map((doctor) => 

//   <AccountDoctorCard
//     isEditing={editMode}
//     key={doctor.id}
//     key={doctor.name}
//     key={doctor.phoneNumber}
// />

// )







  // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons (put all this in a loop)
  return (
    <>
      <p>{account.accountId}</p>
      <button onClick={() => deleteAccount()}>Delete</button>

    {/* {doctorList} */}

    </>
  )
}
export default AccountPage