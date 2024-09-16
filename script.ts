interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
}

interface Experience {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

interface Skill {
  name: string;
}

const resumeData: ResumeData = {
  name: '',
  email: '',
  phone: '',
  education: [],
  experience: [],
  skills: []
};

document.getElementById('generate-resume')?.addEventListener('click', () => {
  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const emailInput = document.getElementById('email') as HTMLInputElement | null;
  const phoneInput = document.getElementById('phone') as HTMLInputElement | null;

  if (nameInput) resumeData.name = nameInput.value;
  if (emailInput) resumeData.email = emailInput.value;
  if (phoneInput) resumeData.phone = phoneInput.value;

  const educationList = document.getElementById('education-list');
  resumeData.education = [];
  if (educationList) {
    for (const block of educationList.children) {
      const degreeInput = block.children[0] as HTMLInputElement | undefined;
      const institutionInput = block.children[1] as HTMLInputElement | undefined;
      const durationInput = block.children[2] as HTMLInputElement | undefined;
      if (degreeInput && institutionInput && durationInput) {
        resumeData.education.push({
          degree: degreeInput.value,
          institution: institutionInput.value,
          duration: durationInput.value
        });
      }
    }
  }

  const experienceList = document.getElementById('experience-list');
  resumeData.experience = [];
  if (experienceList) {
    for (const block of experienceList.children) {
      const jobTitleInput = block.children[0] as HTMLInputElement | undefined;
      const companyInput = block.children[1] as HTMLInputElement | undefined;
      const durationInput = block.children[2] as HTMLInputElement | undefined;
      const descriptionInput = block.children[3] as HTMLInputElement | undefined;
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

  const skillList = document.getElementById('skill-list');
  resumeData.skills = [];
  if (skillList) {
    for (const block of skillList.children) {
      const skillNameInput = block.children[0] as HTMLInputElement | undefined;
      if (skillNameInput) {
        resumeData.skills.push({
          name: skillNameInput.value
        });
      }
    }
  }

  // Generate resume preview HTML
  const resumePreview = document.getElementById('resume-preview');
  if (resumePreview) {
    resumePreview.innerHTML = `
      <h1>${resumeData.name}</h1>
      <p>${resumeData.email} | ${resumeData.phone}</p>
      <h2>Education</h2>
      <ul>
          ${resumeData.education.map((education) => `
              <li>
                  <strong>${education.degree}</strong>
                  ${education.institution}
                  (${education.duration})
              </li>
          `).join('')}
      </ul>
      <h2>Experience</h2>
      <ul>
          ${resumeData.experience.map((experience) => `
              <li>
                  <strong>${experience.jobTitle}</strong>
                  ${experience.company}
                  (${experience.duration})
                  <p>${experience.description}</p>
              </li>
          `).join('')}
      </ul>
      <h2>Skills</h2>
      <ul>
          ${resumeData.skills.map((skill) => `
              <li>${skill.name}</li>
          `).join('')}
      </ul>
    `;
  }
});
