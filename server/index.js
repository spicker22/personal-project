// Import packages
import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'

// Setup Express instance
const app = express()

// Setup Middleware
app.use(express.json())                         // Want my application to be able to use json when using express
app.use(express.static('public'))               // If there was a public folder, can easily reach in and use those files/folders
app.use(express.urlencoded({extended: false}))  // Helps send info along at end of URL 
app.use(morgan('dev'))                          // While in dev environment, can use morgan for more logs (just for dev environment)

// Destructs to extract specific functions
const {getDoctors, getDoctor, addDoctor, deleteDoctor, editDoctor, addAccount, verifyAccount, getAccount} = handlerFunctions   

// Endpoints
app.get('/api/doctors/:categoryId', getDoctors)  // Retrieves a list of doctors
app.get('/api/doctor/:id', getDoctor)            // Retrieves info about specific doctor
app.post('/api/doctor', addDoctor)               // Adds a doctor
app.delete('/api/doctor/:id', deleteDoctor)      // Deletes a doctors
app.put('/api/doctor/:id', editDoctor)           // Edits a doctors

app.post('/api/register', addAccount)            // Adds account
app.post('/api/auth', verifyAccount)             // Handles account/user login/authentication
app.get('/api/account/:id', getAccount)          // Retrieves info about specific account
// app.post('/api/logout', logOut)               // Handles user logout



// Open door to server
ViteExpress.listen(app, 2319, () => console.log(`we have a 2319 report to http://localhost:2319`))     // 2319 is the port

// Note
// Ensure the package.json file has the following in the scripts: 
// "dev": "nodemon server/index.js -w server/index.js -w src",