class Controller {
    static init() {
        const jobs = Controller.loadJobs();
        const jobContainer = document.getElementById('job-container');
        jobs.forEach(job => {
            const card = View.createJobCard(job);
            jobContainer.appendChild(card);
        });

        document.getElementById('submitBtn').addEventListener('click', Controller.handleSubmit);
        document.getElementById('clearBtn').addEventListener('click', Controller.handleClear);
        document.getElementById('formInfo').addEventListener('show.bs.modal', Controller.handleModalShow);
    }

    static loadJobs() {
        const qualifications1 = [
            "Bachelor's degree in Occupational Health and Safety or related discipline, or equivalent practical experience",
            "Candidates will typically have 2 years of experience in program or project management.",
            "Experience with Environmental, Health and Safety (EHS) management, and experience managing EHS compliance for industrial facilities.",
            "Experience managing environmental programs (e.g., emissions, wastewater, etc.)."
        ];

        const qualifications2 = [
            "Bachelor's degree in Computer Science, Mathematics, or related technical field, or equivalent practical experience in software engineering.",
            "5 years of experience in architecting and implementing APIs and integration technologies in distributed enterprise environments using a combination of technologies, languages, or standards like REST, SOAP, GraphQL, JSON, OpenAPI, Python, Java, JavaScript, Cassandra, Kubernetes, etc.",
            "Experience with API Gateway/Management with Apigee or other API management solutions."
        ];

        const qualifications3 = [
            "Bachelor's degree or equivalent practical experience.",
            "Candidates will typically have 8 years of experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).",
            "Candidates will typically have 3 years of experience in a technical leadership role; overseeing projects, with 2 years of experience in a people management, supervision/team leadership role."
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
            qualifications: qualifications2
        });

        const job3 = new Job({
            title: "Engineering Manager, Easy SaaS, Google Cloud",
            company: "Google",
            location: "Warsaw, Poland",
            expLevel: "Advanced",
            qualifications: qualifications3
        });

        return [job1, job2, job3];
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

    static handleClear() {
        localStorage.removeItem('candidateInfo');
        View.clearForm();
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
