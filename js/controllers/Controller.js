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
            "Bacharelado em Saúde e Segurança Ocupacional ou disciplina relacionada, ou experiência prática equivalente",
            "Os candidatos geralmente terão 2 anos de experiência em gerenciamento de programas ou projetos.",
            "Experiência com gestão de Meio Ambiente, Saúde e Segurança (EHS), e experiência na gestão de conformidade EHS para instalações industriais.",
            "Experiência na gestão de programas ambientais (por exemplo, emissões, águas residuais, etc.)."
        ];

        const qualifications2 = [
            "Bacharelado em Ciência da Computação, Matemática ou área técnica relacionada, ou experiência prática equivalente em engenharia de software.",
            "5 anos de experiência em arquitetar e implementar APIs e tecnologias de integração em ambientes empresariais distribuídos usando uma combinação de tecnologias, linguagens ou padrões como REST, SOAP, GraphQL, JSON, OpenAPI, Python, Java, JavaScript, Cassandra, Kubernetes, etc.",
            "Experiência com Gateway/Gestão de API com Apigee ou outras soluções de gestão de API."
        ];

        const qualifications3 = [
            "Bacharelado ou experiência prática equivalente.",
            "Os candidatos geralmente terão 8 anos de experiência com desenvolvimento de software em uma ou mais linguagens de programação (por exemplo, Python, C, C++, Java, JavaScript).",
            "Os candidatos geralmente terão 3 anos de experiência em um papel de liderança técnica; supervisionando projetos, com 2 anos de experiência em gestão de pessoas, supervisão/liderança de equipe."
        ];


        const job1 = new Job({
            title: "Gerente de Programa, Meio Ambiente, Saúde e Segurança de Data Center",
            company: "Google",
            location: "Londres, Reino Unido",
            expLevel: "Intermediário",
            qualifications: qualifications1
        });

        const job2 = new Job({
            title: "Engenheiro de Gestão de API",
            company: "Google",
            location: "Bengaluru, Karnataka, Índia",
            expLevel: "Intermediário",
            qualifications: qualifications2
        });

        const job3 = new Job({
            title: "Gerente de Engenharia, Easy SaaS, Google Cloud",
            company: "Google",
            location: "Varsóvia, Polônia",
            expLevel: "Avançado",
            qualifications: qualifications3
        });


        return [job1, job2, job3];
    }
    static handleSubmit(event) {
        event.preventDefault();

        const form = document.getElementById('candidateForm');
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            profileLink: document.getElementById('profileLink').value,
            aditionalDetails: document.getElementById('aditionalDetails').value
        };

        const candidate = new Candidate(formData);
        candidate.save();

        const modal = bootstrap.Modal.getInstance(document.getElementById('formInfo'));
        modal.hide();

        View.showToast('Formulário enviado com sucesso!');
    }

    static handleClear() {
        Candidate.clear();
        View.clearForm();
    }

    static handleModalShow() {
        const candidate = Candidate.load();
        if (candidate) {
            View.fillForm(candidate);
        } else {
            View.clearForm();
        }
        document.getElementById('candidateForm').classList.remove('was-validated');
    }
}
