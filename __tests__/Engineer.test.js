const Engineer = require("../lib/Engineer")

describe("Engineer class", () => {
    it("should be instantiated", () => {
        const engineer = new Engineer("steve03");
        expect(typeof (engineer)).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    });
    it("should have a name property that can be set on instanstiantion", () => 
    {
        const engineer = new Engineer("steve03");
        expect(engineer.name).toBe("Steve");
    });
    it("should have a id property that can be set on instanstiantion", () => 
    {
        const engineer = new Engineer("steve03");
        expect(engineer.id).toBe(3);        
    });
    it("should have a email property that can be set on instanstiantion", () => 
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.email).toBe("steve.com");
    });
    it("should have a GitHub username property that can be set on instanstiantion", () => 
    {
        const engineer = new Engineer("steve03");
        expect(engineer.github_username).toBe("steve03");
    }); 
    it(`should have a function called "getName()" that returns name of Engineer`, () =>
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.getName()).toBe("Steve");
    });
    it(`should have a function called "getId()" that returns id of Engineer`, () =>
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.getId()).toBe(3);
    });
    it(`should have a function called "getEmail()" that returns email of Engineer`, () =>
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.getEmail()).toBe("steve.com");
    });
    it(`should have a function called "getRole()" that returns role`, () =>
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.getRole()).toBe("Engineer");
    });
    it(`should have a function called "getGithub()" that returns github username of Engineer`, () =>
    {
        const engineer = new Engineer("steve03");;
        expect(engineer.getGithub()).toBe("steve03");
    });
       
});