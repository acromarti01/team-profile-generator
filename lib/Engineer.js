const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github_username) {
        super("Steve", 3, "steve.com");
        this.github_username = github_username;
        this.role = "Engineer";
    }
    getRole() { return this.role; }

    getGithub() { return this.github_username; }
}
module.exports = Engineer;