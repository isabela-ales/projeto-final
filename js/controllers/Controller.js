class Controller {
    static init() {
        const jobs = Controller.loadJobs();
        const jobContainer = document.getElementById('job-container');
        jobs.forEach(job => {
            const card = View.createJobCard(job);
            jobContainer.appendChild(card);

            // Verifica se o candidato já se candidatou a este job
            const candidates = Candidate.loadAll();
            const candidate = candidates.find(c => c.jobId == job.id);
            if (candidate) {
                View.markJobAsApplied(card);
            }
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
            id: 1,
            title: "Gerente de Projeto, Meio Ambiente, Saúde e Segurança de Data Center",
            company: "Google",
            location: "Londres, Reino Unido",
            expLevel: "Intermediário",
            qualifications: qualifications1
        });

        const job2 = new Job({
            id: 2,
            title: "Engenheiro de Gestão de API",
            company: "Google",
            location: "Bengaluru, Karnataka, Índia",
            expLevel: "Intermediário",
            qualifications: qualifications2
        });

        const job3 = new Job({
            id: 3,
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
            aditionalDetails: document.getElementById('aditionalDetails').value,
            jobId: document.getElementById('job-id').value
        };

        const candidate = new Candidate(formData);
        candidate.save();

        const modal = bootstrap.Modal.getInstance(document.getElementById('formInfo'));
        const applyButton = modal.relatedButton;
        modal.hide();

        View.showToast('Formulário enviado com sucesso!');

        // Substituir o botão "Aplicar" pelo aviso "Candidatura enviada"
        if (applyButton) {
            const card = applyButton.closest('.card-job');
            if (card) {
                View.markJobAsApplied(card);
            }
        }
    }

    static handleClear() {
        Candidate.clear();
        View.clearForm();
    }

    static handleModalShow(event) {
        // Salvar o botão que abriu o modal
        const modal = event.target;
        modal.relatedButton = event.relatedTarget;

        // Salvar o ID do trabalho no formulário
        const jobId = event.relatedTarget.getAttribute('data-job-id');
        document.getElementById('job-id').value = jobId;

        const candidate = Candidate.load(jobId);
        if (candidate) {
            View.fillForm(candidate);
        } else {
            View.clearForm();
        }
        document.getElementById('candidateForm').classList.remove('was-validated');
    }
}
