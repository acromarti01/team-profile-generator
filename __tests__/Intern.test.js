const Intern = require("../lib/Intern")

describe("Intern class", () => {
    it("should be instantiated", () => {
        const intern = new Intern("Pearl Bailey");
        expect(typeof (intern)).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    });
    it("should have a name property that can be set on instanstiantion", () => 
    {
        const intern = new Intern("Pearl Bailey");
        expect(intern.name).toBe("Roger");
    });
    it("should have a id property that can be set on instanstiantion", () => 
    {
        const intern = new Intern("Pearl Bailey");
        expect(intern.id).toBe(4);        
    });
    it("should have a email property that can be set on instanstiantion", () => 
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.email).toBe("rickyspanish.com");
    });
    it("should have a school property that can be set on instanstiantion", () => 
    {
        const intern = new Intern("Pearl Bailey");
        expect(intern.school).toBe("pearl bailey");
    }); 
    it(`should have a function called "getName()" that returns name of Intern`, () =>
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getName()).toBe("Roger");
    });
    it(`should have a function called "getId()" that returns id of Intern`, () =>
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getId()).toBe(4);
    });
    it(`should have a function called "getEmail()" that returns email of Intern`, () =>
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getEmail()).toBe("rickyspanish.com");
    });
    it(`should have a function called "getRole()" that returns role`, () =>
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getRole()).toBe("Intern");
    });
    it(`should have a function called "getSchool()" that returns school of Intern`, () =>
    {
        const intern = new Intern("Pearl Bailey");;
        expect(intern.getSchool()).toBe("pearl bailey");
    });
       
});