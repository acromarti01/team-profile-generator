const Employee = require("../lib/Employee");

class Manager extends Employee
{
    constructor(officeNumber)
    {
        super("Francine", 2, "franny.com");
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getRole() { return this.role; }
}
module.exports = Manager;