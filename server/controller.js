// The controller is the server
import {Category, Doctor} from "./model.js"
import { Op } from 'sequelize';

// List of key value pairs 
const handlerFunctions = {

    getDoctors: async (req, res) => {
       const doctors = await Doctor.findAll()                       // Getting all doctors
       res.send(doctors)                                            // Sending entire doctor set
    },  

    getDoctor: async (req, res) => {
        const {id} = req.params                                     // Extracting 'id' parameter from request parameters
        const doctor = await Doctor.findByPk(+id)                    // Finding specific doctor
        res.send(doctor)                                            // Sending doctor
     },

    addDoctor: async (req, res) => {
       const {name,phoneNumber,address,categoryId} = req.body       // Destructs properties from 'body' of incoming request (req)
       const newRow = {                                             // Creating new doctor row                                 
        name: name,                                                 // name property
        phoneNumber:phoneNumber,                                    // phoneNumber property
        address: address,                                           // address property
        categoryId: categoryId                                      // categoryId property
       }
       await Doctor.create(newRow)                                  // Creating new doctor record in 'Doctor' database w/ values specified in 'newRow' object
       const doctors = await Doctor.findAll()                       // Getting all doctors
       res.send(doctors)                                            // Sending entire doctor set
    },

    deleteDoctor: async (req, res) => {
        const {id} = req.params                                     // Extracting 'id' parameter from request parameters
        const doctor = await Doctor.findByPk(id)                    // Finding doctor you want to delete
        await doctor.destroy()                                      // Deleting identiified doctor
        const doctors = await Doctor.findAll()                      // Getting all udpated list of the doctors
        res.send(doctors)                                           // Sending entire doctor set
    },

    editDoctor: async (req, res) => {
        const {id} = req.params                                     // Extracting 'id' parameter from request parameters
        const {name, phoneNumber, address, categoryId} = req.body   // Get name, phoneNumber, address, categoryId from body object
        const editDoctor = await Doctor.findByPk(id)                // Finding the doctor you want to delete

        editDoctor.name = name                                      // Change object ( the name ) 
        editDoctor.phoneNumber = phoneNumber                        // Change object ( the phoneNumber ) 
        editDoctor.address = address                                // Change object ( the address ) 
        editDoctor.categoryId = categoryId                          // Change object ( the categoryId ) 

        await editDoctor.save()                                      // Deleting the identiified doctor
        const doctors = await Doctor.findAll()                       // Getting all the udpated list of the doctors
        res.send(doctors)                                            // Sending entire doctor set
    }
}
export default handlerFunctions