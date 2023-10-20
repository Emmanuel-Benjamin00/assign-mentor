import express from "express"

import studentController from "../controller/student.js"

const router = express.Router()

router.post('/',studentController.createStudent)
router.post('/assignChangeMentorforStudent',studentController.assignChangeMentor)
router.get('/previousMentor',studentController.getPreviousMentor)

export default router