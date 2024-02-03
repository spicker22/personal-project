import {Category, Doctor, Account, db} from "../server/model.js"
import doctorData from "./data/doctors.json" assert {type: 'json'}
import categoryData from "./data/categories.json" assert {type: 'json'}        
import accountData from "./data/account.json" assert {type: 'json'}  

// Sync db back to empty thing (empty it), so you can seed it
console.log('Syncing database...')
await db.sync({force: true})            
console.log('Seeding database');

// Loop over each category (in category data in categories.json)
const categoriesInDB = await Promise.all(
    categoryData.map(async (category) => {
    const {categoryName} = category                                 // Destructing columns from 'category' object
    const newCategory = await Category.create({                     // Adding category to category table
        categoryName                                                // Adding categoryName to categoryName column
    })
    return newCategory                                              // Return new category to map array return           
})
)

// Loop over each account (in account data in account.json)
const accountsInDB = await Promise.all(
    accountData.map(async (account) => {
    const {email, password} = account                               // Destructing columns from 'doctor' object
    const newAccount = await Account.create({                       // Adding account instnace to account table
        email,                                                      // Adding email to email column                             
        password                                                    // Adding password to password column   
    })
    return newAccount                                               // Return new account to map array return
})
)

// Loop over each doctor (in doctor data in doctors.json)
const doctorsInDB = await Promise.all(
    doctorData.map(async (doctor) => {
    const {name, phoneNumber, address, categoryId, accountId, imgURL} = doctor   // Destructing columns from 'doctor' object
    const newDoctor = await Doctor.create({                         // Adding doctor instance to doctor table
        name,                                                       // Adding name to name column
        phoneNumber, 
        address, 
        categoryId,
        accountId,
        imgURL
    })
    return newDoctor                                                 // Return new doctor to map array return
})
)

await db.close()
console.log('Finished seeding dateabase.')