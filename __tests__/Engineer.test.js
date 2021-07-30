const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should be instantiated", () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    });
    it("should be inherited from Employee class", () => {
        const engineer = new Engineer();
        expect(engineer instanceof Employee).toBe(true);
    });
    it("should have a GitHub username property that can be set on instanstiantion", () => {
        const engineer = new Engineer("steve03");
        expect(engineer.github_username).toBe("steve03");
    });
    it(`should have a function called "getGithub()" that returns github username of Engineer`, () => {
        const engineer = new Engineer("steve03");
        expect(engineer.getGithub()).toBe("steve03");
    });

});