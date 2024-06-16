class Candidate {
    constructor({ name, email, phoneNumber, profileLink, aditionalDetails }) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.profileLink = profileLink;
        this.aditionalDetails = aditionalDetails;
    }
}

class Job {
    constructor({ title, company, location, expLevel, qualifications }) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.expLevel = expLevel;
        this.qualifications = qualifications;
    }

    listQualifications() {
        return this.qualifications.map(qual => `<li>${qual}</li>`).join('');
    }
}

const qualifications1 = [
    "Bachelor's degree in Occupational Health and Safety or related discipline, or equivalent practical experience",
    "Candidates will typically have 2 years of experience in program or project management.",
    "Experience with Environmental, Health and Safety (EHS) management, and experience managing EHS compliance for industrial facilities.",
    "Experience managing environmental programs (e.g., emissions, wastewater, etc.)."
];

const job1 = new Job({
    title: "Program Manager, Data Center Environmental, Health, and Safety",
    company: "Google",
    location: "London, UK",
    expLevel: "Mid",
    qualifications: qualifications1
});

const job2 = new Job({
    title: "API Management Engineer",
    company: "Google",
    location: "Bengaluru, Karnataka, India",
    expLevel: "Mid",
    qualifications: qualifications1
});

const jobs = [job1, job2];
console.log(jobs);

function createJobCard(job) {
    const card = document.createElement('div');
    card.classList.add('card-job');

    card.innerHTML = `
        <div class="title-job">
            <span class="title-cards">${job.title}</span>
            <button type="button" class="btn-apply m-2" data-bs-toggle="modal" data-bs-target="#formInfo">Aplicar</button>
        </div>
        <div class="job-info">
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_603_163" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_603_163)">
                        <path
                            d="M2 17V3.5H10V6.5H18V17H2ZM3.5 15.5H8.5V14H3.5V15.5ZM3.5 12.5H8.5V11H3.5V12.5ZM3.5 9.5H8.5V8H3.5V9.5ZM3.5 6.5H8.5V5H3.5V6.5ZM10 15.5H16.5V8H10V15.5ZM11.5 11V9.5H15V11H11.5ZM11.5 14V12.5H15V14H11.5Z"
                            fill="#9699EB" />
                    </g>
                </svg> ${job.company}</div>
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <mask id="mask0_603_168" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="21">
                        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_603_168)">
                        <path
                            d="M10.0044 10C10.4181 10 10.7708 9.85271 11.0625 9.55813C11.3542 9.26354 11.5 8.90937 11.5 8.49562C11.5 8.08187 11.3527 7.72917 11.0581 7.4375C10.7635 7.14583 10.4094 7 9.99563 7C9.58188 7 9.22917 7.14729 8.9375 7.44188C8.64583 7.73646 8.5 8.09063 8.5 8.50438C8.5 8.91813 8.64729 9.27083 8.94187 9.5625C9.23646 9.85417 9.59062 10 10.0044 10ZM10 16.0208C11.6528 14.5347 12.8993 13.1667 13.7396 11.9167C14.5799 10.6667 15 9.54861 15 8.5625C15 7.10417 14.5243 5.89583 13.5729 4.9375C12.6215 3.97917 11.4306 3.5 10 3.5C8.56944 3.5 7.37847 3.97917 6.42708 4.9375C5.47569 5.89583 5 7.10417 5 8.5625C5 9.54861 5.42014 10.6667 6.26042 11.9167C7.10069 13.1667 8.34722 14.5347 10 16.0208ZM10 18C7.81986 16.179 6.19146 14.4877 5.11479 12.926C4.03826 11.3642 3.5 9.90972 3.5 8.5625C3.5 6.70139 4.11806 5.14236 5.35417 3.88542C6.59028 2.62847 8.13542 2 9.98958 2C11.8438 2 13.3924 2.62847 14.6354 3.88542C15.8785 5.14236 16.5 6.70139 16.5 8.5625C16.5 9.90972 15.9653 11.3611 14.8958 12.9167C13.8264 14.4722 12.1944 16.1667 10 18Z"
                            fill="#A896EB" />
                    </g>
                </svg> ${job.location}</div>
            <div class="info">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <mask id="mask0_603_173" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                        width="20" height="20">
                        <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_603_173)">
                        <path
                            d="M4 15.5H7V9H4V15.5ZM8.5 15.5H11.5V4.5H8.5V15.5ZM13 15.5H16V10.5H13V15.5ZM2.5 17V7.5H7V3H13V9H17.5V17H2.5Z"
                            fill="#A896EB" />
                    </g>
                </svg> ${job.expLevel}</div>
        </div>
        <div class="description">
            <br>
            <span class="qualifications roboto-bold">Qualificações Mínimas</span><br>
            <ul class="job-description">${job.listQualifications()}</ul>
        </div>
    `;

    return card;
}

const jobContainer = document.getElementById('job-container');
jobs.forEach(job => {
    const card = createJobCard(job);
    jobContainer.appendChild(card);
});

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        profileLink: document.getElementById('profileLink').value,
        aditionalDetails: document.getElementById('aditionalDetails').value
    };

    const candidateInfo = new Candidate(formData);
    console.log(candidateInfo);

    // Salva as informações no localStorage
    localStorage.setItem('candidateInfo', JSON.stringify(candidateInfo));

    var modal = bootstrap.Modal.getInstance(document.getElementById('formInfo'));
    modal.hide();

    var toastElement = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
});

document.getElementById('formInfo').addEventListener('show.bs.modal', function () {
    // Recupera as informações do localStorage
    const storedCandidateInfo = JSON.parse(localStorage.getItem('candidateInfo'));

    if (storedCandidateInfo) {
        document.getElementById('name').value = storedCandidateInfo.name;
        document.getElementById('email').value = storedCandidateInfo.email;
        document.getElementById('phoneNumber').value = storedCandidateInfo.phoneNumber;
        document.getElementById('profileLink').value = storedCandidateInfo.profileLink;
        document.getElementById('aditionalDetails').value = storedCandidateInfo.aditionalDetails;
    }
});

