  import { useNavigate, Link, useLoaderData } from 'react-router-dom';
  import { useState } from 'react'
  import axios from 'axios';


  function AccountDoctorCard(props) {

    
    const { account } = useLoaderData()
    const [doctorsName, setDoctorsName] = useState(account.doctor.name)
    const [phoneNumber, setPhoneNumber] = useState(account.doctor.phoneNumber)
    const [isEditing, setIsEditing] = useState(false)
  
  
  
  // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons (put all this in a loop)
  return (isEditing) ? (
    <>
      <button onClick={changeNormalMode}>Save</button>
      <input
        type="text"
        value={doctorsName}
        onChange={(e) => setDoctorsName(e.target.value)}
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </>
  ) : (
    <>
      <p>{doctorsName}</p>
      <p>{phoneNumber}</p>
      <button onClick={() => deleteDoctor()}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  )
}
export default AccountDoctorCard