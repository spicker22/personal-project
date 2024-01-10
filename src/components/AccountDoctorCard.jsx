import { useState } from 'react'
import axios from 'axios';

function AccountDoctorCard(props) {
  const { id, setCurrentData, doctorId, accountId } = props
  const [doctorsName, setDoctorsName] = useState(props.name)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [isEditing, setIsEditing] = useState(false)



  console.log(doctorsName)


  // Save function
  const saveFunction = () => {
    const bodyObj = {
      name: doctorsName,
      phoneNumber: phoneNumber,
      accountId: accountId
    }

    // Axios put request to insert data into database
    axios.put(`/api/doctor/${doctorId}`, bodyObj)
      .then((res) => {
        setCurrentData(res.data)
        setIsEditing(false)
      })
  }

  // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons (put all this in a loop)
  return (isEditing) ? (
    <>
      <button onClick={saveFunction}>Save</button>
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
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <p>{props.name}</p>
      <p>{props.phoneNumber}</p>

      {/* <p>{doctorsName}</p>
      <p>{phoneNumber}</p> */}

      <button onClick={() => deleteDoctor()}>Delete</button>
      {/* <button onClick={changeNormalMode}>Save</button> */}

    </>
  )
}
export default AccountDoctorCard