# Assign mentor for students

All endpoints are list below, you can use the postman documentation for more clear output.

Please check the postman documentation link - https://documenter.getpostman.com/view/30441359/2s9YRB3XnQ

This is a Mentor Assigning API.

It can create a mentor when entering the mentorName. The endpoint is /mentor.

It can create a student when entering the studentName. The endpoint is /student.

It can assign an array of students to a mentor, when entering the mentorName and the array of students. The endpoint is /mentor/assignStudentsToMentor.

It can assign or change a mentor for a student, when enterng the studentName and the mentorName. The endpoint is /student/assignChangeMentorforStudent.

It can show all the students of a particular mentor. The endpoint is /mentor/particulerMentorStudents.

It can show the previous mentor of a specific student. The endpoint is /student/previousMentor
