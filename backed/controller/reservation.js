import ErrorHandler from "../error/error.js"
import { Reservation } from "../models/reservationSchema.js"


export const sendReservation = async ( req, res, next ) => {
    const { firstName, lastName, email, phone, date, time } = req.body
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next (new ErrorHandler("Please fill in all the required fields!", 400))
    }
    try {
       await Reservation.create({ firstName, lastName, email, phone, date, time }) 
       res.status(200).json({
        success: true,
        message: "You have successfully reserved this car!",
       })
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            )
            return next(new ErrorHandler(validationErrors.join(" ,"), 400))
        }
        return next(error)
    }
}