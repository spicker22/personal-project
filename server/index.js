import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import handlerFunctions from './controller.js'
import session from 'express-session';

// Setup Express instance
const app = express()

// Setup Middleware
app.use(express.json())                         // Want my application to be able to use json when using express
app.use(express.static('public'))               // If there was a public folder, can easily reach in and use those files/folders
app.use(express.urlencoded({extended: false}))  // Helps send info along at end of URL 
app.use(morgan('dev'))                          // While in dev environment, can use morgan for more logs (just for dev environment)
app.use(                                        // Top level middleware function
    session({                                   // 'session' is function from express-session which allows to access session data on each request
      resave: false,
      saveUninitialized: true,                  // Indicates whether to save a session when it is created, even if no data is added or changed
      secret: 'random string',
    })
  )

// Destructs to extract specific functions
const {getDoctors, getDoctor, addDoctor, deleteDoctor, editDoctor, addAccount, verifyAccount, getAccount, logOut} = handlerFunctions   

// Endpoints
app.get('/api/doctors/:categoryId', getDoctors)  // Retrieves a list of doctors
app.get('/api/doctor/:id', getDoctor)            // Retrieves info about specific doctor
app.post('/api/doctor', addDoctor)               // Adds a doctor
app.delete('/api/doctor/:id', deleteDoctor)      // Deletes a doctors
app.put('/api/doctor/:id', editDoctor)           // Edits a doctors
app.post('/api/register', addAccount)            // Adds account
app.post('/api/auth', verifyAccount)             // Handles account/user login/authentication
app.get('/api/account/:id', getAccount)          // Retrieves info about specific account
app.get('/api/logout', logOut)


// Open door to server. 2319 is the port
ViteExpress.listen(app, 2319, () => console.log(`we have a 2319 report to http://localhost:2319`)) 


// Notes
// Ensure the package.json file has the following in the scripts: 
// "dev": "nodemon server/index.js -w server/index.js -w src",