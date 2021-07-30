const Manager = require("../lib/Manager")

describe("Manager class", () => {
    it("should be instantiated", () => {
        const manager = new Manager(246);
        expect(typeof (manager)).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    });
    it("should have a name property that can be set on instanstiantion", () => 
    {
        const manager = new Manager(246);
        expect(manager.name).toBe("Francine");
    });
    it("should have a id property that can be set on instanstiantion", () => 
    {
        const manager = new Manager(246);
        expect(manager.id).toBe(2);        
    });
    it("should have a email property that can be set on instanstiantion", () => 
    {
        const manager = new Manager(246);;
        expect(manager.email).toBe("franny.com");
    });
    it("should have a officeNumber property that can be set on instanstiantion", () => 
    {
        const manager = new Manager(246);
        expect(manager.officeNumber).toBe(246);
    });  
    it(`should have a function called "getName()" that returns name of Manager`, () =>
    {
        const manager = new Manager(246);;
        expect(manager.getName()).toBe("Francine");
    });
    it(`should have a function called "getId()" that returns id of Manager`, () =>
    {
        const manager = new Manager(246);;
        expect(manager.getId()).toBe(2);
    });
    it(`should have a function called "getEmail()" that returns email of Manager`, () =>
    {
        const manager = new Manager(246);;
        expect(manager.getEmail()).toBe("franny.com");
    });
    it(`should have a function called "getRole()" that returns role`, () =>
    {
        const manager = new Manager(246);;
        expect(manager.getRole()).toBe("Manager");
    });  
});