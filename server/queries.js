import { Category, Doctor, Account } from "./model.js"



// const doctors = await Doctor.findAll()


// const accounts = await Account.findAll(   {
//     include: {
//         model: Doctor
//     }
// })



const account = await Account.findOne({                       // Finding account you want to check
    where: {                                                  // 'where' is just SQL 'Where' statement
        email: email,                                         // Checking 'email' match 
        password: password                                    // Checking 'password' match 
    },
})



const doctor = await account.getDoctor()   


console.log(doctor);









