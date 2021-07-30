const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super("Roger", 4, "rickyspanish.com");
        this.school = school;
        this.role = "Intern";
    }
    getRole() { return this.role; }

    getSchool() { return this.school; }
}
module.exports = Intern;