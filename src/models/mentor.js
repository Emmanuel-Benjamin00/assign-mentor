import mongoose from "./index.js";

const validateStringInArray = (e) => {
    return e.every(item => typeof item === "string")
}

const mentorSchema = new mongoose.Schema(
    {
        mentorName: { type: String, required: [true, "Mentor Name is required"] },
        students: { type:Array, validate: validateStringInArray }
    },
    {
        versionKey: false
    }
)

const mentorModel = mongoose.model("mentors", mentorSchema)
export default mentorModel