class Job {
    constructor({ id, title, company, location, expLevel, qualifications }) {
        this.id = id;
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
