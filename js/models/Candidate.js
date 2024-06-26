class Candidate {
    constructor({ name, email, phoneNumber, profileLink, aditionalDetails, jobId }) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.profileLink = profileLink;
        this.aditionalDetails = aditionalDetails;
        this.jobId = jobId;
    }

    save() {
        let candidates = JSON.parse(localStorage.getItem('candidates')) || [];
        candidates.push(this);
        localStorage.setItem('candidates', JSON.stringify(candidates));
    }

    static load(jobId) {
        const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
        return candidates.find(candidate => candidate.jobId == jobId);
    }

    static loadAll() {
        return JSON.parse(localStorage.getItem('candidates')) || [];
    }

    static clear() {
        localStorage.removeItem('candidates');
    }
}
