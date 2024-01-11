import { useState } from 'react'
import axios from 'axios';

function AccountDoctorCard(props) {
  const { id, setCurrentData, doctorId, accountId } = props
  const [doctorsName, setDoctorsName] = useState(props.name)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [isEditing, setIsEditing] = useState(false)

  // Save doctor function
  const saveFunction = () => {
    const bodyObj = {
      name: doctorsName,
      phoneNumber: phoneNumber,
      accountId: accountId
    }

    // Axios put request to insert doctor data into database
    axios.put(`/api/doctor/${doctorId}`, bodyObj)
      .then((res) => {
        setCurrentData(res.data)
        setIsEditing(false)
      })
  }

  // Delete doctor function
  const deleteDoctor = () => {
    const confirmDelete = window.confirm('Sure want to delete doctor?')
    if (confirmDelete) {
      axios.delete(`/api/doctor/${doctorId}`)
        .then((res) => {
          setCurrentData(res.data)
          console.log(res.data);
        })
        .catch((error) => {
          console.error('Error deleting doctor:', error);
        })
    }
  }

  // If/else statement with 'Save' or 'Edit/Delete' buttons and values
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
      <button onClick={() => deleteDoctor()}>Delete</button>
      <p>{props.name}</p>
      <p>{props.phoneNumber}</p>
    </>
  )
}
export default AccountDoctorCard




