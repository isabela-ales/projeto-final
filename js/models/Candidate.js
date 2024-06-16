class Candidate {
    constructor({ name, email, phoneNumber, profileLink, aditionalDetails }) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.profileLink = profileLink;
        this.aditionalDetails = aditionalDetails;
    }

    save() {
        localStorage.setItem('candidateInfo', JSON.stringify(this));
    }

    static load() {
        const storedCandidateInfo = JSON.parse(localStorage.getItem('candidateInfo'));
        return storedCandidateInfo ? new Candidate(storedCandidateInfo) : null;
    }

    static clear() {
        localStorage.removeItem('candidateInfo');
    }
}
