/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
        getBaseApi(dataTestAttribute: string): Chainable<any>
    }
}
