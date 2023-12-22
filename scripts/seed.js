import {Category, Doctor, db} from "../server/model.js"
import doctorData from "./data/doctors.json" assert {type: 'json'}
import categoryData from "./data/categories.json" assert {type: 'json'}           
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

// Loop over each doctor (in doctor data in doctors.json)
const doctorsInDB = await Promise.all(
    doctorData.map(async (doctor) => {

    // Destructing columns from 'doctor' object
    const {name, phoneNumber, address, categoryId} = doctor

    // Adding movie to movie table
    const newDoctor = await Doctor.create({
        name,
        phoneNumber, 
        address, 
        categoryId
    })
    // Return new doctor to map array return
    return newDoctor
})
)

await db.close()
console.log('Finished seeding dateabase.')