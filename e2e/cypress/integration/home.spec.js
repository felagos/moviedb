/// <reference types="Cypress" />

describe("Home page test", () => {

    it("Show home page", () => {
        cy.visit("/");
    });

});