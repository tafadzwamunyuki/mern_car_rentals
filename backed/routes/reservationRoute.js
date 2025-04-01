import exrpress from "express"
import { sendReservation } from "../controller/reservation.js"

const router = exrpress.Router()

router.post("/send", sendReservation)

export default router