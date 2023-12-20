// The controller is the server
import {Category} from "./server/model.js"
import {Doctor} from "./server/model.js"
import { Op } from 'sequelize';

// List of key value pairs 
const handlerFunctions = {

    addDoctor: async (req, res) => {
       const {description} = req.body                 // Destructs 'description' property from 'body' of incoming request (req)
       const newRow = {                               // Creating new doctor row
        description,                                  // Description property
        rate: 0,                                      // Rate property initially set to 0
        hours: 0                                      // Hours property initially set to 0
       }
       await Doctor.create(newRow)                     // Creating new doctor record in 'Doctor' database w/ values specified in 'newRow' object
       const doctors = await Doctor.findAll()           // Getting all movies
       res.send(doctors)                               // Sending entire movie set
    },

    deleteMovie: async (req, res) => {
        const {id} = req.params
        const movie = await Movie.findByPk(id)         // Finding the invoice you want to delete
        await movie.destroy()                          // Deleting the identiified invoice
        const movies = await Movie.findAll()           // Getting all the udpated list of the invoices
        res.send(movies)                               // Sending entire movie set
    },

    editMovie: async (req, res) => {
        const {id} = req.params
        const {description, hours, rate} = req.body    // Get descritpion, rate, hours from body object
        const editMovie = await Movie.findByPk(id)     // Finding the invoice you want to delete

        editMovie.description = description            // Change object ( the description )    
        editMovie.rate = rate                          // Change object ( the rate )  
        editMovie.hours = hours                        // Change object ( the hours )  

        await editMovie.save()                         // Deleting the identiified invoice
        const movies = await Movie.findAll()           // Getting all the udpated list of the invoices
        res.send(movies)                               // Sending entire movie set
    }
}
export default handlerFunctions