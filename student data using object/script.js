// Sample Student Data
const students = [
    {
        name: "mustafa ",
        age: 88,
        father_name: "munir",
        isFeePaid: true,
        courses: ["Mathematics", "Physics", " Science"]
    },
    {
        name: "kashif",
        age: 89,
        father_name: "khan",
        isFeePaid: false,
        courses: ["Mathematics", "Chemistry", "Biology"]
    }
];

// Displaying Student Data in the Browser
const studentList = document.getElementById('student-list');

students.forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');

    studentCard.innerHTML = `
        <h2>${student.name}</h2>
        <p><strong>age:</strong> ${student.age}</p>
        <p><strong>Father's Name:</strong> ${student.father_name}</p>
        <p><strong>Fee Paid:</strong> ${student.isFeePaid ? "Yes" : "No"}</p>
        <p><strong>Courses:</strong> ${student.courses.join(", ")}</p>
    `;

    studentList.appendChild(studentCard);
});
