//const { expect } = require("@jest/globals");
//const { it } = require("jest-circus");
const Employee = require("../lib/Employee")

describe("Employee class", () => {
    it("should be instantiated", () => {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof (employee)).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    });
    it("should have a name property that can be set on instanstiantion", () => 
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.name)).toBe("string");
        expect(employee.name).toBe("Smith Family");
    });
    it("should have a id property that can be set on instanstiantion", () => 
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.id)).toBe("number");
        expect(employee.id).toBe(1);        
    });
    it("should have a email property that can be set on instanstiantion", () => 
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.email)).toBe("string");
        expect(employee.email).toBe("smithfamily.com");
    });
    it(`should have a function called "getName()" that returns name of Employee`, () =>
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.getName)).toBe("string");
        expect(employee.getName()).toBe("Smith Family");
    });
    it(`should have a function called "getId()" that returns id of Employee`, () =>
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.getId)).toBe("number");
        expect(employee.getId()).toBe(1);
    });
    it(`should have a function called "getEmail()" that returns email of Employee`, () =>
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.getEmail)).toBe("string");
        expect(employee.getEmail()).toBe("smithfamily.com");
    });
    it(`should have a function called "getRole()" that returns role`, () =>
    {
        const employee = new Employee("Smith Family", 1, "smithfamily.com");
        expect(typeof(employee.getRole)).toBe("string");
        expect(employee.getRole()).toBe("Employee");
    });
});