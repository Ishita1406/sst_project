const mongoose = require('mongoose')
const user = require('../models/userModel');

mongoose.connect(process.env.DATABASE_URL)

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})

// user.collection.dropIndex('username_1')
//             .then(() => {
//                 console.log("Index dropped");
//             })
//             .catch(err => {
//                 console.error("Error dropping index:", err);
//             })
//             .finally(() => {
//                 mongoose.connection.close();
//             });
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})