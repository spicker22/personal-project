import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';







function AccountPage(props) {

  const { account } = useLoaderData()
  const [doctorsName, setDoctorsName] = useState(account.doctor.name)
  const [phoneNumber, setPhoneNumber] = useState(account.doctor.phoneNumber)
  const [isEditing, setIsEditing] = useState(false)


  // console.log('string', account);
  console.log('work dammit');
  console.log(account);

// Function to change back to normal
  const changeNormalMode = () => {
    const bodyObj = {
      name: doctorsName,
      phoneNumber: phoneNumber
    }

    axios.put(`/api/doctor/${account.doctor.doctorId}`, bodyObj).then((res) => {
      setIsEditing(false)
    })
  }

// Clicking the Save button //
// 1. Update the values in the database

// A. Make a onSave function that is referenced in the return 
// 2. Switch back to non edit mode






  // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons
  return (isEditing) ? (
    <>
      <button onClick={changeNormalMode} >Save</button>

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

      <button>Delete</button>

      <button onClick={()=> setIsEditing(true)}>Edit</button>
    </>
  )
}


export default AccountPage