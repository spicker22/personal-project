import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import AccountDoctorCard from '../components/AccountDoctorCard.jsx'
import './AccountPage.css'
import { useDispatch } from 'react-redux';

// AccountPage component
function AccountPage(props) {
  const { account } = useLoaderData()
  const [currentData, setCurrentData] = useState(account)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(account.doctors)
  const dispatch = useDispatch()
  const navigate = useNavigate();

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

  // Logout account function
  const logoutAccount = () => {
    const confirmLogout = window.confirm('Sure want to logout?')

    if (confirmLogout) {
      axios.get(`/api/logout`)
        .then((res) => {
          dispatch({ type: 'logout' });
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
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
      address={doctor.address}
    />
  })

  // AccountId, Account 'Delete' button, & list of associated doctors
  return (
    <div className='test'>
      <div className="account-container">
        <p id='text'>Account {currentData.accountId}</p>
        
        <button className='DLButton' onClick={() => deleteAccount()}>Delete</button>

        <button className='DLButton' onClick={() => logoutAccount()}>Logout</button>

      </div>
     
      {doctorList}

      {/* <span class="material-symbols-outlined">
        close
      </span>
      <i class='material-icons'>close</i> */}
    </div>
  )
}
export default AccountPage