class Controller {
    static init() {
        const jobs = Controller.loadJobs();
        const jobContainer = document.getElementById('job-container');
        jobs.forEach(job => {
            const card = View.createJobCard(job);
            jobContainer.appendChild(card);
        });

        document.getElementById('submitBtn').addEventListener('click', Controller.handleSubmit);
        document.getElementById('formInfo').addEventListener('show.bs.modal', Controller.handleModalShow);
    }

    static loadJobs() {
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

        return [job1, job2];
    }

    static handleSubmit(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            profileLink: document.getElementById('profileLink').value,
            aditionalDetails: document.getElementById('aditionalDetails').value
        };

        const candidate = new Candidate(formData);
        candidate.save();

        var modal = bootstrap.Modal.getInstance(document.getElementById('formInfo'));
        modal.hide();

        View.showToast('Formulário enviado com sucesso!');
    }

    static handleModalShow() {
        const candidate = Candidate.load();
        if (candidate) {
            View.fillForm(candidate);
        } else {
            View.clearForm();
        }
    }
}
