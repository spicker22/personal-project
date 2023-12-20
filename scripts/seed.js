import {Category, Doctor, db} from "../server/model.js"
import doctorData from "./data/doctors.json" assert {type: 'json'}        
import lodash from 'lodash'

// Sync db back to empty thing (empty it), so you can seed it
console.log('Syncing database...')
await db.sync({force: true})            
console.log('Seeding database');

// Loop over each doctor (in doctor data in doctors.json)
const doctorsInDB = await Promise.all(
    doctorData.map(async (doctor) => {

    // Destructing columns from 'doctor' object
    const {doctorname, phonenumber, address, categoryid} = doctor

    // Adding movie to movie table
    const newDoctor = await Doctor.create({
        doctorname,
        phonenumber, 
        address, 
        categoryid
    })
    // Return new doctor to map array return
    return newDoctor
})
)
await db.close()
console.log('Finished seeding dateabase.')