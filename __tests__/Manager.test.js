const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("should be instantiated", () => {
        const manager = new Manager();
        expect(typeof (manager)).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    });
    it("should be inherited from Employee class", () => {
        const manager = new Manager();
        expect(manager instanceof Employee).toBe(true);
    });
    it("should have a officeNumber property that can be set on instanstiantion", () => {
        const manager = new Manager(246);
        expect(manager.officeNumber).toBe(246);
    });
    it(`should have a function called "getRole()" that returns role`, () => {
        const manager = new Manager(246);;
        expect(manager.getRole()).toBe("Manager");
    });
});