import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import AccountDoctorCard from '../components/AccountDoctorCard.jsx'

// AccountPage component
function AccountPage(props) {
  const { account } = useLoaderData()
  const [currentData, setCurrentData] = useState(account)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(account.doctors)

  // Delete account function
  const deleteAccount = () => {
    const confirmDelete = window.confirm('Sure want to delete account?')
    if (confirmDelete) {
      axios.delete(`/api/account/${currentData.accountId}`)
        .then((res) => {
        })
        .catch((error) => {
        })
    }
  }

  // Variable that maps over doctor array and renders them in 'AccountDoctorCard' component
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
  })

  // AccountId, Account 'Delete' button, & list of associated doctors
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