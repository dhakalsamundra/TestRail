describe("login to the gmail", ()=>{
    beforeEach(() => {
        cy.visit('')
    })
    const password = Cypress.env("CYPRESS_PASSWORD");
    
    it("C619 login and land to the dashboard", () => {
        cy.log(Cypress.env("CYPRESS_TESTRAIL_REPORTER_PASSWORD"));
        cy.get("#L2AGLb > .QS5gu").click();
        cy.get(".gLFyf").click().type(password).get("li").first().click();
        cy.contains("Images").should("exist");
    });
})