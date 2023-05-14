// cypress/tests/api/api-users.spec.ts
describe("Users API", () => {
  context("GET /users", () => {
    it("gets a list of users", () => {
      cy.getBaseApi("courses").then((response) => {
        expect(response.status).to.eq(200)
        expect(JSON.stringify(response.body).length).to.be.greaterThan(1)
      })
    })
  })
})
