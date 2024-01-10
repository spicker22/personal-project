import { Category, Doctor, Account } from "./model.js"



// const doctors = await Doctor.findAll()


// const accounts = await Account.findAll(   {
//     include: {
//         model: Doctor
//     }
// })



const account = await Account.findOne({                       // Finding account you want to check
    where: {                                                  // 'where' is just SQL 'Where' statement
        accountId: 1,                                         // Checking 'email' match 
    },
    include: {
        model: Doctor
    }
})





// console.log(account);
console.log(account);