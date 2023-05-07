/*
  All of these tests are failing and it is your job to debug them
  to find out why.
*/
describe("Debug Failing Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("displays the correct header text", () => {
        cy.get('[data-test="hero-heading"]').contains("Testing Next.js Applications with Cypress");
    });

    it("the post links on the homepage link to the correct course", () => {
        cy.get('[data-test="course-0"]').find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application");
    });

    it("/api/courses returns a status code of 201", () => {
        cy.request("GET", "http://localhost:3000/api/courses").then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
