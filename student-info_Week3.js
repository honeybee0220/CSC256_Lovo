document.addEventListener("DOMContentLoaded", function() {
    const studentInfo = {
        name: "Emily Lovo",
        major: "Cyber Security",
        email: "elovo82512@uat.edu",
        graduationDate: "June 2026"
    };

    const studentInfoDiv = document.getElementById("student-info");

    studentInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${studentInfo.name}</p>
        <p><strong>Major:</strong> ${studentInfo.major}</p>
        <p><strong>Email:</strong> <a href="mailto:${studentInfo.email}">${studentInfo.email}</a></p>
        <p><strong>Expected Graduation Date:</strong> ${studentInfo.graduationDate}</p>
    `;
});
