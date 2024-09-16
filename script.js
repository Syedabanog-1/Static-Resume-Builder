var _a;
var resumeData = {
    name: '',
    email: '',
    phone: '',
    education: [],
    experience: [],
    skills: []
};
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    if (nameInput)
        resumeData.name = nameInput.value;
    if (emailInput)
        resumeData.email = emailInput.value;
    if (phoneInput)
        resumeData.phone = phoneInput.value;
    var educationList = document.getElementById('education-list');
    resumeData.education = [];
    if (educationList) {
        for (var _i = 0, _a = educationList.children; _i < _a.length; _i++) {
            var block = _a[_i];
            var degreeInput = block.children[0];
            var institutionInput = block.children[1];
            var durationInput = block.children[2];
            if (degreeInput && institutionInput && durationInput) {
                resumeData.education.push({
                    degree: degreeInput.value,
                    institution: institutionInput.value,
                    duration: durationInput.value
                });
            }
        }
    }
    var experienceList = document.getElementById('experience-list');
    resumeData.experience = [];
    if (experienceList) {
        for (var _b = 0, _c = experienceList.children; _b < _c.length; _b++) {
            var block = _c[_b];
            var jobTitleInput = block.children[0];
            var companyInput = block.children[1];
            var durationInput = block.children[2];
            var descriptionInput = block.children[3];
            if (jobTitleInput && companyInput && durationInput && descriptionInput) {
                resumeData.experience.push({
                    jobTitle: jobTitleInput.value,
                    company: companyInput.value,
                    duration: durationInput.value,
                    description: descriptionInput.value
                });
            }
        }
    }
    var skillList = document.getElementById('skill-list');
    resumeData.skills = [];
    if (skillList) {
        for (var _d = 0, _e = skillList.children; _d < _e.length; _d++) {
            var block = _e[_d];
            var skillNameInput = block.children[0];
            if (skillNameInput) {
                resumeData.skills.push({
                    name: skillNameInput.value
                });
            }
        }
    }
    // Generate resume preview HTML
    var resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = "\n      <h1>".concat(resumeData.name, "</h1>\n      <p>").concat(resumeData.email, " | ").concat(resumeData.phone, "</p>\n      <h2>Education</h2>\n      <ul>\n          ").concat(resumeData.education.map(function (education) { return "\n              <li>\n                  <strong>".concat(education.degree, "</strong>\n                  ").concat(education.institution, "\n                  (").concat(education.duration, ")\n              </li>\n          "); }).join(''), "\n      </ul>\n      <h2>Experience</h2>\n      <ul>\n          ").concat(resumeData.experience.map(function (experience) { return "\n              <li>\n                  <strong>".concat(experience.jobTitle, "</strong>\n                  ").concat(experience.company, "\n                  (").concat(experience.duration, ")\n                  <p>").concat(experience.description, "</p>\n              </li>\n          "); }).join(''), "\n      </ul>\n      <h2>Skills</h2>\n      <ul>\n          ").concat(resumeData.skills.map(function (skill) { return "\n              <li>".concat(skill.name, "</li>\n          "); }).join(''), "\n      </ul>\n    ");
    }
});
