/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("getBaseApi", (route) => {
    return cy.request(`GET`, `http://localhost:3000/api/${route}`)
})
