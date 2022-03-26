const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, school) {
        super( name, id, email);
        this.school = school;

    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;