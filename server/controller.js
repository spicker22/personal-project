import { Category, Doctor, Account } from "./model.js"
import { Op } from 'sequelize';

// List of handlerFunctions
const handlerFunctions = {

    getDoctors: async (req, res) => {
        const { categoryId } = req.params                           // Pulling a piece of the URL (params)                        
        const doctors = await Doctor.findAll({                      // Setting doctors variable to query that goes into Doctor model
            where: {                                                // 'where' is just SQL 'Where' statement
                categoryId: categoryId                              // Matching categoryID column to incoming 'params' data that has been destructed
            }
        })
        res.send(doctors)
    },

    getDoctor: async (req, res) => {
        const { id } = req.params                                   // Extracting 'id' parameter from request parameters
        const doctor = await Doctor.findByPk(+id)                   // Finding specific doctor
        res.send(doctor)                                            // Sending doctor
    },

    addDoctor: async (req, res) => {
        const { name, phoneNumber, address, categoryId } = req.body  // Destructs properties from 'body' of incoming request (req)
        const newRow = {                                             // Creating new doctor row                                 
            name: name,                                              // name property
            phoneNumber: phoneNumber,                                // phoneNumber property
            address: address,                                        // address property
            categoryId: categoryId                                   // categoryId property
        }
        await Doctor.create(newRow)                                  // Creating new doctor record in 'Doctor' database w/ values specified in 'newRow' object
        const doctors = await Doctor.findAll()                       // Getting all doctors
        res.send(doctors)                                            // Sending entire doctor set
    },

    deleteDoctor: async (req, res) => {
        const { id } = req.params                                    // Extracting 'id' parameter from request parameters
        const doctor = await Doctor.findByPk(+id)                    // Finding doctor you want to delete
        await doctor.destroy()                                       // Deleting identified doctor
        const doctors = await Doctor.findAll()                       // Getting all udpated list of the doctors
        res.send(doctors)                                            // Sending entire doctor set
    },

    editDoctor: async (req, res) => {
        const { id } = req.params                                     // Extracting 'id' parameter from request parameters
        const { name, phoneNumber, accountId, address, categoryId } = req.body   // Get name, phoneNumber, address, categoryId from body object
        const editDoctor = await Doctor.findByPk(+id)                 // Finding the doctor you want to delete

        editDoctor.name = name                                        // Change object ( the name ) 
        editDoctor.phoneNumber = phoneNumber                          // Change object ( the phoneNumber ) 
        // editDoctor.address = address                               // Change object ( the address ) 
        // editDoctor.categoryId = categoryId                         // Change object ( the categoryId ) 

        await editDoctor.save()                                       // Deleting the identiified doctor
        // const doctors = await Doctor.findAll()                     // Getting all the udpated list of the doctors
        // res.send(doctors)          
        
        
        const account = await Account.findByPk(+accountId, {                  // Finding specific account
            include: [                                                 // Joining Doctor model
                {
                    model: Doctor
                },
            ]
        })
        res.send(account) 
        
        
        
        
        
        // Sending entire doctor set
    },

    addAccount: async (req, res) => {
        const { email, password } = req.body                          // Destructs properties from 'body' of incoming request (req)
        const newRow = {                                              // Creating new account row                                 
            email: email,                                             // email property
            password: password                                        // password property

        }
        await Account.create(newRow)                                  // Creating new account record in 'Account' database w/ values specified in 'newRow' object
        res.send('success')                                           // Sending 'success' string
    },



    verifyAccount: async (req, res) => {
        const { email, password } = req.body                          // Extracting 'email' & 'password' from request parameters
        const account = await Account.findOne({                       // Finding account you want to check
            where: {                                                  // 'where' is just SQL 'Where' statement
                email: email,                                         // Checking 'email' match 
                password: password                                    // Checking 'password' match 
            },
        })

        if (account) {                                                // If statement checking account parameters match                   
            res.send({ message: 'success', name: 'name', id: account.accountId })
        } else {
            res.send('failure')
        }
    },



    getAccount: async (req, res) => {
        const { id } = req.params
        const account = await Account.findByPk(+id, {                  // Finding specific account
            include: [                                                 // Joining Doctor model
                {
                    model: Doctor
                },
            ]
        })
        res.send(account)                                              // Sending account
    },

    //  logOut: async (req, res) => {
    //     const {id} = req.params                                     // Extracting 'id' parameter from request parameters
    //     const account = await Account.findByPk(+id)                 // Finding account you want to delete - ???????
    //     await account.destroy()                                     // Deleting identified account  - ???????
    // },
}
export default handlerFunctions


















// 1. need to update server(getDoctors) so that it returns filtered doctors. This will be in the controller
//          what variables/ data is needed to break that down
//           what data doo we want to use
//           c. how to sequalize use that to filter daeta
//           d. updaet res.send so that it sends the filtered doctors



// 2. need to update index.js to allow endpoint to accept parameters
//      value from parameter, is determined by.....
//
// test -> with postman (step 1 and 2 need to be complete before testing with postman)



// 3. need to figure out, how to pass 'selection' on the frontend to give to backend
//          state variable, or a button
//          examples -> if have state variable
//         or onclick attached to each button, a axios request is sent, and updates state variable of doctors



// Use javascript to filter data with json data
// then figure out come up with sequalize syntax

// need to identify doctors after you figured out category id 