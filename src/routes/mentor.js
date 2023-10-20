import express from "express"

import mentorController from "../controller/mentor.js"

const router = express.Router()


router.post('/',mentorController.createMentor)
router.post('/assignStudentsToMentor',mentorController.assignStudents)
router.get('/particulerMentorStudents', mentorController.allStudentsofParticularMentor)

export default router