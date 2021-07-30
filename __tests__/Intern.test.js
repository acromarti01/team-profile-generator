const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should be instantiated", () => {
        const intern = new Intern();
        expect(typeof (intern)).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    });
    it("should be inherited from Employee class", () => {
        const intern = new Intern();
        expect(intern instanceof Employee).toBe(true);
    });
    it("should have a school property that can be set on instanstiantion", () => {
        const intern = new Intern("Pearl Bailey");
        expect(intern.school).toBe("Pearl Bailey");
    });
    it(`should have a function called "getSchool()" that returns school of Intern`, () => {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getSchool()).toBe("Pearl Bailey");
    });
});