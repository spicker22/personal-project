import {Category, Doctor, Account, db} from "../server/model.js"
import doctorData from "./data/doctors.json" assert {type: 'json'}
import categoryData from "./data/categories.json" assert {type: 'json'}        
import accountData from "./data/account.json" assert {type: 'json'}         
import lodash from 'lodash'

// Sync db back to empty thing (empty it), so you can seed it
console.log('Syncing database...')
await db.sync({force: true})            
console.log('Seeding database');



// Loop over each category (in category data in categories.json)
const categoriesInDB = await Promise.all(
    categoryData.map(async (category) => {

    // Destructing columns from 'category' object
    const {categoryName} = category

    // Adding cateogry to category table
    const newCategory = await Category.create({
        categoryName
    })
    // Return new category to map array return
    return newCategory
})
)



// Loop over each account (in account data in account.json)
const accountsInDB = await Promise.all(
    accountData.map(async (account) => {

    // Destructing columns from 'doctor' object
    const {email, password} = account

    // Adding account to account table
    const newAccount = await Account.create({
        email,
        password
    })
    // Return new account to map array return
    return newAccount
})
)


// Loop over each doctor (in doctor data in doctors.json)
const doctorsInDB = await Promise.all(
    doctorData.map(async (doctor) => {

    // Destructing columns from 'doctor' object
    const {name, phoneNumber, address, categoryId, accountId} = doctor

    // Adding doctor to doctor table
    const newDoctor = await Doctor.create({
        name,
        phoneNumber, 
        address, 
        categoryId,
        accountId
    })
    // Return new doctor to map array return
    return newDoctor
})
)



await db.close()
console.log('Finished seeding dateabase.')