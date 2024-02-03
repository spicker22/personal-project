import axios from 'axios';
import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AccountDoctorCard from '../components/AccountDoctorCard.jsx'
import './AccountPage.css'
import AddDoctorModal from './AddDoctorModal.jsx'

// AccountPage component
function AccountPage(props) {

  const { account } = useLoaderData()
  const [currentData, setCurrentData] = useState(account.doctors)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)    
  const [doctorName, setDoctorName] = useState('')
  const [doctorPhoneNumber, setDoctorPhoneNumber] = useState('')
  const [doctorAddress, setDoctorAddress] = useState('')
  const [doctorAccountId, setDoctorAccountId] = useState('')
  const [categoryId, setcCategoryId] = useState('')
  const [imgURL, setImgURL] = useState('')


  // Add Doctor function
  const addDoctor = () => {
    setShowModal(true)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const bodyObj = {
      name: doctorName,
      phoneNumber: doctorPhoneNumber,
      address: doctorAddress,
      categoryId: categoryId,
      imgURL: imgURL,
      accountId: doctorAccountId
    }

    // Axios put request to insert hobby data into database
    axios.post(`/api/doctor`, bodyObj)
      .then((res) => {
        setCurrentData(res.data)
        setShowModal(false)
      })
  }
  
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
  const doctorList = currentData.map((doctor) => {
    // console.log(doctor);
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
        <button class="DLButton" onClick={addDoctor}>Add Doctor</button>
        <button className='DLButton' onClick={() => deleteAccount()}>Delete</button>
        <button className='DLButton' onClick={() => logoutAccount()}>Logout</button>
      </div>
      {doctorList}
      <br></br>
      <br></br>
      <AddDoctorModal
        showModal={showModal}
        setShowModal={setShowModal}
        setDoctorName={setDoctorName}
        setDoctorPhoneNumber={setDoctorPhoneNumber}
        setDoctorAddress={setDoctorAddress}
        setcCategoryId={setcCategoryId}
        setImgURL={setImgURL}
        setDoctorAccountId={setDoctorAccountId}
        handleSubmit={handleSubmit}
        />
    </div>
  )
}
export default AccountPage