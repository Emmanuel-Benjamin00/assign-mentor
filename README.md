# Mentor Assigning API

This API facilitates the assignment of mentors to students and provides various functionalities related to mentor-student relationships. The endpoints are detailed below. For a more clear output, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/30441359/2s9YRB3XnQ).

## Endpoints

### Create Mentor

- **Endpoint:** `POST /mentor`
- **Description:** Creates a mentor when providing the mentorName.

### Create Student

- **Endpoint:** `POST /student`
- **Description:** Creates a student when providing the studentName.

### Assign Students to Mentor

- **Endpoint:** `POST /mentor/assignStudentsToMentor`
- **Description:** Assigns an array of students to a mentor when providing the mentorName and the array of students.

### Assign or Change Mentor for Student

- **Endpoint:** `POST /student/assignChangeMentorforStudent`
- **Description:** Assigns or changes a mentor for a student when providing the studentName and the mentorName.

### Show All Students of a Particular Mentor

- **Endpoint:** `GET /mentor/particularMentorStudents`
- **Description:** Displays all the students of a particular mentor when providing the mentorName.

### Show Previous Mentor of a Specific Student

- **Endpoint:** `GET /student/previousMentor`
- **Description:** Displays the previous mentor of a specific student when providing the studentName.

## Technologies Used

- Backend: Expressjs
- Database: MongoDB

## Usage:

1. To get started with the Restaurant Website:
   ```bash
   git clone https://github.com/Emmanuel-Benjamin00/assign-mentor

