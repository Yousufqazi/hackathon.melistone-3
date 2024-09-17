var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b>".concat(name, "</p>\n    <p><b>Email : </b>").concat(email, "</p>\n    <p><b>Phone : </b>").concat(phone, "</p>\n    \n    <h3>education</h3>\n    <p>").concat(education, "</p>\n\n    \n    <h3>Experiance</h3>\n    <p>").concat(experiance, "</p>\n\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
