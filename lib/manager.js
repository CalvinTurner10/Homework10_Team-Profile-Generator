const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super( name, id, email);
        this.officeNumber = officeNumber;

    }
    getoffficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;