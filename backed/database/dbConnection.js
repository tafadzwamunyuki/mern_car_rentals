import mongoose from "mongoose"

// Get db name and establish connection to website
export const dbConnection = () => {
 mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "MERN_Car_Rental",
    })   
    .then(() => {
        console.log("Established database connection")
    }).catch(err => {
        console.log(`Error connecting to database ${err}`)
    })
}