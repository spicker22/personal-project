import { useState } from 'react'
import axios from 'axios';
import './AccountDoctorCard.css'

function AccountDoctorCard(props) {
  const { id, setCurrentData, doctorId, accountId } = props
  const [doctorsName, setDoctorsName] = useState(props.name)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [address, setAddress] = useState(props.address)
  const [isEditing, setIsEditing] = useState(false)

  // Save doctor function
  const saveFunction = () => {
    const bodyObj = {
      name: doctorsName,
      phoneNumber: phoneNumber,
      address: address,
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
      <div class="full-width-line-account"></div>


      <div className="doctor-info-container">



        <div className='textAndInput'>
          <p>Name:</p>
          <input
            type="text"
            value={doctorsName}
            onChange={(e) => setDoctorsName(e.target.value)}
          />
        </div>


        <div className='textAndInput'>
          <p>Phone Number:  </p>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>


        <div className='textAndInput'>
          <p>City:  </p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>


        <button class="ADCbutton" onClick={saveFunction}>Save</button>

      </div>
    </>
  ) : (
    <>
      <div class="full-width-line-account"></div>
      <div className="doctor-info-container">
        <div>
          <p id='title'>Doctor</p>
          <p>Name: {props.name}</p>
          <p>Phone number: {props.phoneNumber}</p>
          <p>City: {props.address}</p>
        </div>
        <div>
          <button class="ADCbutton" onClick={() => setIsEditing(true)}>Edit</button>
          <button class="ADCbutton" onClick={() => deleteDoctor()}>Delete</button>
        </div>
        
      </div>





    </>
  )
}
export default AccountDoctorCard




