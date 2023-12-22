import React from 'react'

// Create the 'DoctorsName' function that will be passed to the App.jsx
const DoctorsName = (props) => {

  // Need to show whether or not we are in edit mode
  // Destruct so can use the properties as variables  
  const {isEditing, value, setDoctorsName} = props

  // Ternary statement is the short hand version of the if/else statement.
  // ? is the end of the condition
  // : is the else statement
  return isEditing ? (

    // The if statement
    <td>
        <input 
        type = "text" 
        value={value}
        onChange = {(e) => setDoctorsName(e.target.value)}
        />
    </td>
  ) : (

     // The else statement. 
   <td>
    {value}
   </td>
  )
}

export default DoctorsName